import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    }
    highlightInput: boolean;

    constructor(private _authservice: AuthService,
        private _router: Router,
        private _toastService: ToastService) { }

    onSubmit() {
        this._authservice.login(this.localUser)
            .subscribe(data => {
                this.localUser.username = data.body.username;
                let isAdmin = data.body.isAdmin;
                localStorage.setItem('username', this.localUser.username);
                localStorage.setItem('isAdmin', isAdmin)
                // console.log(data);
                // this._toastService.activate(`Welcome back ${data.body.username}!`);
                this._router.navigate(['home']);

                // let userElement = document.getElementById('navbar-name');
                // userElement.setAttribute('href', `/${data.body.username}`);
                // userElement.innerHTML = data.body.username;
            });

    }
}