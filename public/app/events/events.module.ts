import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventsComponent } from '../events/events-main/events.component';
import { EventsDetailComponent } from '../events/events-detail/events-detail.component';
import { EventsService } from './events.service';

import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ EventsComponent, EventsDetailComponent ],
    declarations: [ EventsComponent, EventsDetailComponent ],
    providers: [ ToastrService, EventsService ]
})
export class EventsModule {
}
