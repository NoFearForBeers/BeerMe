import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RequesterService } from '../../shared/services/requester.service';
import { User } from '../user.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    isLoggedin: boolean = false;

    constructor(private http: Http, private _requester: RequesterService) {
    }

    login(userCreds: any) {
        let url = '/api/login';
        let headers = new Headers();
        let creds = `username=${userCreds.username}&password=${userCreds.password}`;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, creds, headers)
            .do((data: any) => {
                window.localStorage.setItem('auth_key', data.token);
                this.isLoggedin = true;
            });
    }

    logout() {
        this.isLoggedin = false;
        window.localStorage.removeItem('auth_key');
    }

    register(userInfo: any): Observable<User> {
        let url = '/api/register';
        let headers = new Headers({'Content-Type': 'application/json'});
        let body = { body: JSON.stringify(userInfo) };

        return this.http.post(url, body, headers)
                        .map((r: Response) => r.json().data as User);
            // .do(data => console.log(data));
    }
}
