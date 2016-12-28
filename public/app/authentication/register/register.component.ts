import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../shared/services/toast.service';
import { User } from '../user.model';

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

    highlightInput: boolean;

    constructor(private authService: AuthService,
        private router: Router,
        private toastService: ToastService) { }

    onSubmit() {
        this.authService.register(this.newUser)
            .subscribe(data => {
                // this.authService.login({ username: this.newUser.username, password: this.newUser.password })
                //     .subscribe(data => {
                        // console.log(data);
                        this.router.navigate(['login']);
                        this.toastService.activate(`${data.username} successfuly registered!`);

                        // Temporary
                        alert(`${data.username} successfuly registered!`);

                        // let userElement = document.getElementById('navbar-name');
                        // userElement.setAttribute('href', `/${data.username}`);
                        // userElement.innerHTML = data.username;
                    // });
            });
    }
}
