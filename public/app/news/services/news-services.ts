import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { News } from '../news.model';

@Injectable()
export class NewsService {
    private topNewsUrl = '/api/news';

    constructor(private http: Http) { }

    getAllNews(): Observable<News[]> {
        return this.http.get(this.topNewsUrl)
                        .map((r: Response) => r.json().data as News[]);
    }

    getNewsById(id: string): Observable<News> {
        let url = `${this.topNewsUrl}/${id}`;

        return this.http.get(url)
                        .map((r: Response) => r.json().data as News);
    }
}
