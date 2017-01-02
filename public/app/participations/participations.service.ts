import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Participation } from './participation.model';

@Injectable()
export class ParticipationsService {
    private ParticipationURL = '/api/participations';

    constructor(private http: Http) { }

    getAllParticipations(): Observable<Participation[]> {
        return this.http.get(this.ParticipationURL)
                        .map((r: Response) => r.json().data as Participation[]);
    }

    // register(participationInfo: any): Observable<Participation> {
    //     let url = '/api/participations';
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let body = { body: JSON.stringify(participationInfo) };
      

    //     return this.http.post(url, body, headers)
    //         .map((r: Response) => r.json().data as Participation);
    //     // .do(data => console.log(data));
    // }

}
