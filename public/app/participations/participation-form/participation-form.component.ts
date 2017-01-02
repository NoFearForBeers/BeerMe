import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PageComponent } from '../../shared/page.component';
import { Participation } from '../../participations/participation.model';
import { ParticipationsService } from '../../participations/participations.service';
import { EventsService } from '../../events/events.service';


@Component({
  moduleId: module.id,
  selector: 'participation-form',
  templateUrl: './participation-form.component.html',
   //styleUrls: ['./participations.component.css']
})

export class ParticipationFormComponent implements PageComponent {
  newParticipation: Participation = {
        username: window.localStorage.getItem('username'),
        eventId: '',
        categories: [],
        comment: ''
    };
    categories: any[];
  
  private subscription: Subscription;

  constructor(private participationsService: ParticipationsService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private eventService: EventsService ) {
  }

  ngOnInit() {
   //subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let eventId = param['eventId'];
        console.log(eventId);
        this.newParticipation.eventId = eventId;
        let eventinfo = this.eventService.getEventsById(eventId)
                  .subscribe(event => this.categories = event.category);
      });
  }

  ngOnDestroy() {
    //prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  onSubmit() {
        this.participationsService.register(this.newParticipation)
            .subscribe(
                data => {
                  console.log(data);
                    this.router.navigate(['participations']);
 
                    //this.showSuccess(`${data.username} successfuly registered!`);
            },
            error => {
                    // this.showError(error);
                    console.log(error)
            });
    }
 }
