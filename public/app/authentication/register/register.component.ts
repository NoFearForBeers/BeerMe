import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    newUser = {
        username: '',
        firstName: '',
        lastName: '',
        profileImgURL: '',
        email: '',
        password: '',
    };

    highlightInput: boolean;

    constructor(private _authservice: AuthService,
        private _router: Router,
        private _toasService: ToastService) { }

    onSubmit() {
        this._authservice.register(this.newUser)
            .subscribe(() => {
                this._authservice.login({ username: this.newUser.username, password: this.newUser.password })
                    .subscribe(data => {
                        this._toasService.activate(`${data.username} successfuly registered!`);
                        this._router.navigate(['home']);

                        let userElement = document.getElementById('navbar-name');
                        userElement.setAttribute('href', `/${data.username}`);
                        userElement.innerHTML = data.username;
                    });
            });
    }
}
