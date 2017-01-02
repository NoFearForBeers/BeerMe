import { Component } from '@angular/core';

import { PageComponent } from '../../shared/page.component';
import { Events } from '../../events/events.model';
import { EventsService } from '../../events/events.service';

@Component({
  moduleId: module.id,
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements PageComponent {
  eventsList: Events[] = [];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.eventsService.getAllEvents()
                       .subscribe(events => this.eventsList = events);
  }
}
