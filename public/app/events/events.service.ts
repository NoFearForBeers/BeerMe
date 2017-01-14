import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Event } from './event.model';

@Injectable()
export class EventsService {
    private eventsURL = '/api/events';

    constructor(private http: Http) { }

    getAllEvents(): Observable<Event[]> {
        return this.http.get(this.eventsURL)
                        .map((r: Response) => r.json().data as Event[]);
    }

    getEventsById(id: string): Observable<Event> {
        let url = `${this.eventsURL}/${id}`;

        return this.http.get(url)
                        .map((r: Response) => r.json().data as Event);
    }
}
