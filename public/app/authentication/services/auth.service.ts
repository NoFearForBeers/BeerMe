import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { RequesterService } from '../../shared/services/requester.service';
import { User } from '../user.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    //isLoggedIn: boolean = false;

    constructor(private http: Http, private _requester: RequesterService, private router: Router) {
    }

    login(userCreds: any): Observable<any> {
        let url = '/api/login';
        let headers = new Headers();
        let creds = `username=${userCreds.username}&password=${userCreds.password}`;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, creds, headers)
            .map((data: any) => {
                console.log(data);
                window.localStorage.setItem('auth_key', data.body.token);
                //this.isLoggedIn = true;
                return data;
            });
    }

    logout() {
        //this.isLoggedIn = false;
        window.localStorage.removeItem('auth_key');
        window.localStorage.removeItem('username');
        this.router.navigateByUrl('/home');
    }

    register(userInfo: any): Observable<User> {
        let url = '/api/register';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = { body: JSON.stringify(userInfo) };

        return this.http.post(url, body, headers)
            .map((r: Response) => r.json().data as User);
        // .do(data => console.log(data));
    }

    isLoggedIn() {
        if(window.localStorage.getItem('auth_key')) {
            return true;
        }

        return false;
    }

    isAdminLogged() {
        return this.isLoggedIn() && window.localStorage.getItem('isAdmin');
    }

    getUsername() : Promise<string> {
        return new Promise((resolve, reject) => {
                let username = window.localStorage.getItem('username')
                resolve(username);
        });
    }
}
