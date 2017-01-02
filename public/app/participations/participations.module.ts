import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ParticipationsComponent } from '../participations/participations.component';
import { ParticipationsService } from '../participations/participations.service';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ ParticipationsComponent ],
    declarations: [ ParticipationsComponent ],
    providers: [ ParticipationsService ]
})
export class ParticipationsModule {
}