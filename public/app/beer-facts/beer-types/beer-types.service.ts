import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ResponseResult } from '../../shared/responseResult';
import { BeerTypes } from './beer-types.model';

@Injectable()
export class BeerTypesService {
    private beerTypesUrl = '/api/beer-types';

    constructor(private http: Http) { }

    getAllBeerTypes(): Observable<BeerTypes[]> {
        return this.http.get(this.beerTypesUrl)
                        .map((r: Response) => r.json().data as BeerTypes[]);
    }
};