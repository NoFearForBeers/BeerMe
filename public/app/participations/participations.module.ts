import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ParticipationsComponent } from '../participations/participations.component';
import { ParticipationsService } from '../participations/participations.service';
import { ParticipationFormComponent } from '../participations/participation-form/participation-form.component';

import { ColorDirective } from '../shared/directives/color.directive';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ ParticipationsComponent, ParticipationFormComponent ],
    declarations: [ ParticipationsComponent, ParticipationFormComponent, ColorDirective ],
    providers: [ ParticipationsService ]
})
export class ParticipationsModule {
}

