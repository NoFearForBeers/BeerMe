import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'toastr-ng2';

import { PageComponent } from '../../shared/page.component';
import { Participation } from '../../participations/participation.model';
import { ParticipationsService } from '../../participations/participations.service';
import { EventsService } from '../../events/events.service';
import { AuthService } from '../../authentication/services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'participation-form',
  templateUrl: './participation-form.component.html',
  //styleUrls: ['./participations.component.css']
})

export class ParticipationFormComponent implements PageComponent {
  newParticipation: Participation = {
    username: '',
    eventId: '',
    eventTitle: '',
    categories: [],
    comment: ''
  };
  categories: any[];


  private subscription: Subscription;

  constructor(private participationsService: ParticipationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventService: EventsService,
    private authService: AuthService,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
    //subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let eventId = param['eventId'];
        console.log(eventId);
        this.newParticipation.eventId = eventId;
        let eventinfo = this.eventService.getEventsById(eventId)
          .subscribe(event => {
            this.categories = event.category;
            this.newParticipation.eventTitle = event.title;
          });
        this.authService.getUsername()
          .then(username => this.newParticipation.username = username);
      });
  }

  ngOnDestroy() {
    //prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if(this.newParticipation.categories.length === 0) {
      this.showError('Трябва да изберете поне една категория за участие!');
    } else {
      this.participationsService.register(this.newParticipation)
        .subscribe(
        data => {
          //console.log(data);
          this.showSuccess(`Успешно се регистрирахте за състезанието ${this.newParticipation.eventTitle}!`);
          this.router.navigate(['events']);
        },
        error => {
          this.showError(`Грешка при записването!`);
          //console.log(error)
        });
    }
  }

  updateCategories(category, event) {
    if (event.target.checked) {
      this.newParticipation.categories.push(category)
    }
    else {
      let index = this.newParticipation.categories.indexOf(category)
      if (index > -1) {
        this.newParticipation.categories.splice(index, 1);
      }
    }
  }

  showSuccess(message: string) {
    this.toastrService.success(message, 'Успех!');
  }

  showError(message: string) {
    this.toastrService.error(message, 'Грешка!');
  }
}
