import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../user.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {
    }

    login(userCreds: any): Observable<any> {
        let url = '/api/login';
        let headers = new Headers();
        let body = {
            body: JSON.stringify({
                username: userCreds.username,
                password: userCreds.password
            })
        };

        headers.append('Content-Type', 'application/json');
        return this.http
            .post(url, body, headers)
            .map((r: Response) => {
                let data = r.json();
                window.localStorage.setItem('auth_key', data.body.token);
                return data;
            });
    }

    logout() {
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
        if (window.localStorage.getItem('auth_key')) {
            return true;
        }

        return false;
    }

    isAdminLogged() {
        let isLogged = this.isLoggedIn();
        let isAdmin = window.localStorage.getItem('isAdmin');
        return isLogged && (isAdmin === 'true');
    }

    getUsername(): Promise<string> {
        return new Promise((resolve, reject) => {
            let username = window.localStorage.getItem('username')
            resolve(username);
        });
    }
}
