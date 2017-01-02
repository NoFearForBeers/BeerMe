import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { EventsComponent } from '../events/events-main/events.component';
import { EventsDetailComponent } from '../events/events-detail/events-detail.component';
import { EventsService } from './events.service';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ EventsComponent, EventsDetailComponent ],
    declarations: [ EventsComponent, EventsDetailComponent ],
    providers: [ EventsService ]
})
export class EventsModule {
}
