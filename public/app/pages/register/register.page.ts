import { Component } from '@angular/core';
import { Auth } from '../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.page.html'
})
export class RegisterPage {
    constructor(private auth: Auth) {
    }
};