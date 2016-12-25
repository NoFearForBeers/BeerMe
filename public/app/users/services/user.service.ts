import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ResponseResult } from '../../shared/responseResult';
import { User } from '../user.model';

@Injectable()
export class UserService {
    private usersUrl = '/api/users';
    constructor(private http: Http) { }

    saveUser(body: User): Observable<any> {
        return this.http.post(this.usersUrl, body).map(response => {
            let data = response.json() as ResponseResult<User[]>;
            console.log(data.result);
            return data.result;
        });
    }

    getUserById(id: string): Observable<any> {
        let url = `${this.usersUrl}/${id}`;
        
        return this.http.get(url)
            .map(response => {
                let data = response.json() as ResponseResult<User[]>;
                return data.result;
            });
    }
};