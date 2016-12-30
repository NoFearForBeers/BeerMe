import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html'
})

export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    };

    highlightInput: boolean;

    constructor(private _authService: AuthService,
        private _router: Router,
        private _toastrService: ToastrService) {
    }

    onSubmit() {
        this._authService.login(this.localUser)
            .subscribe(data => {
                this.localUser.username = data.body.username;
                let isAdmin = data.body.isAdmin;
                localStorage.setItem('username', this.localUser.username);
                localStorage.setItem('isAdmin', isAdmin);

                this.showSuccess(`Welcome back ${data.body.username}!`);
                this._router.navigate(['home']);
            },
            error => {
                    this.showError(error);
            });
    }

    showSuccess(message: string) {
        this._toastrService.success(message, 'Successs!');
    }

    showError(message: string) {
        this._toastrService.error(message, 'Error!');
    }
}
