import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../user.model';
import { ToastrService } from 'toastr-ng2';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    newUser: User = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        profileImgURL: '',
        email: '',
        recipes: [],
        forumPoints: 0,
        isAdmin: false
    };

    confirmPassword: string = '';

    constructor(private authService: AuthService,
        private router: Router,
        private _toastrService: ToastrService) { }

    onSubmit() {
        this.authService.register(this.newUser)
            .subscribe(
            data => {
                this.router.navigate(['login']);
                this.showSuccess(`Потребител ${data.username} е регистриран успешно!`);
            },
            error => {
                let responseBody = error._body;
                let responseObj = JSON.parse(responseBody);
                this.showError(responseObj.msg);
            });
    }

    showSuccess(message: string) {
        this._toastrService.success(message, 'Успех!');
    }

    showError(message: string) {
        this._toastrService.error(message, 'Грешка!');
    }
}
