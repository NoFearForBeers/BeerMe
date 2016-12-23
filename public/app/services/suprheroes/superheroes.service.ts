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
    getAll(): Promise<Superhero[]> {
        return this.http.get(this.allSuperheroesUrl)
            .toPromise()
            .then(response => {
                let data = response.json() as ResponseResult<Superhero[]>;
                console.log(data.result);
                return data.result;
            });

    }

    //  TODO: make this with Observable

    //  getAll(): Observable<Superhero[]> {
    //     return this.http
    //         .get(this.allSuperheroesUrl)
    //         .map((response: Response) => <any>response.json())

    // }
}