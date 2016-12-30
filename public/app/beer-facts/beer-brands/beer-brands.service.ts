import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ResponseResult } from '../../shared/responseResult';
import { BeerBrands } from './beer-brands.model';

@Injectable()
export class BeerBrandsService {
    private beerBrandsUrl = '/api/beer-brands';

    constructor(private http: Http) { }

    getAllBeerBrands(): Observable<BeerBrands[]> {
        return this.http.get(this.beerBrandsUrl)
                        .map((r: Response) =>{
                             return r.json().data as BeerBrands[];
                            });
    }
}