import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ResponseResult } from '../../shared/responseResult';
import { TopBeer } from '../top-beers.model';

@Injectable()
export class TopBeersService {
    private topBeersUrl = '/api/top-beers';

    constructor(private http: Http) { }

    getAllBeers(): Observable<TopBeer[]> {
        return this.http.get(this.topBeersUrl)
                        .map((r: Response) => r.json().data as TopBeer[]);
    }

    getBeerById(id: string): Observable<TopBeer> {
        let url = `${this.topBeersUrl}/${id}`;

        return this.http.get(url)
                        .map((r: Response) => r.json().data as TopBeer);
    }
};