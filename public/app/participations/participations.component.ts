import { Component } from '@angular/core';

import { PageComponent } from '../shared/page.component';
import { Participation } from '../participations/participation.model';
import { ParticipationsService } from '../participations/participations.service';
import { ParticipationFormComponent } from '../participations/participation-form/participation-form.component';

@Component({
  moduleId: module.id,
  selector: 'events',
  templateUrl: './participations.component.html',
   //styleUrls: ['./participations.component.css']
})

export class ParticipationsComponent implements PageComponent {
  participationsList: Participation[] = [];

  constructor(private participationsService: ParticipationsService) {
  }

  ngOnInit() {
    this.participationsService.getAllParticipations()
                       .subscribe(participations => this.participationsList = participations);
  }
}
