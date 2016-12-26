import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { RequesterService } from '../../shared/services/requester.service';

import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    isLoggedin: boolean = false;

    constructor(private _requester: RequesterService) {
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

    register(userInfo: any) {
        let url = '/api/register';
        let headers = new Headers();

        let userInfoAsString = `username=${userInfo.username}&
        firstname=${userInfo.firstName}&
        lastname=${userInfo.lastName}&
        profileImgURL=${userInfo.profileImgURL}&
        email=${userInfo.email}&
        password=${userInfo.password}`;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, userInfoAsString, headers);
            // .do(data => console.log(data));
    }
}
