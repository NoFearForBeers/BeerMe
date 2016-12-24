import { ResponseResult } from '../../models/responseResult';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Http, Response } from '@angular/http';
import { Superhero } from '../../models/superhero.model';

@Injectable()
export class SuperheroesService {
    private allSuperheroesUrl: string = '/api/superheroes';

    constructor(private http: Http) {

    }

getAll(): Observable<Superhero[]> {
    return this.http.get(this.allSuperheroesUrl)
                .map(response => {
                    let data = response.json() as ResponseResult<Superhero[]>;
                    return data.result;
                })
    }
}