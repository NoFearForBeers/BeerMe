import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Event } from '../event.model';
import { EventsService } from '../../events/events.service';

@Component({
    moduleId: module.id,
    selector: 'events-detail',
    templateUrl: './events-detail.component.html',
    styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements PageComponent {
    events: Event;

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        //console.log(this.route.params);
        this.route.params
            .switchMap((params: Params) => this.eventsService.getEventsById(params['id']))
            .subscribe(currentEvents => this.events = currentEvents);
    }
}