import { Component } from '@angular/core';

import { PageComponent } from '../../shared/page.component';
import { Participation } from '../../participations/participation.model';
import { ParticipationsService } from '../../participations/participations.service';

@Component({
  moduleId: module.id,
  selector: 'participation-form',
  templateUrl: './participation-form.component.html',
   //styleUrls: ['./participations.component.css']
})

export class ParticipationFormComponent implements PageComponent {
  newParticipation: Participation = {
        username: window.localStorage.username,
        eventId: '',
        categories: [],
        comment: ''
    };

  constructor(private participationsService: ParticipationsService) {
  }

  ngOnInit() {
    // this.participationsService.getAllParticipations()
    //                    .subscribe(participations => this.participationsList = participations);
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
