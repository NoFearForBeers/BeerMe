import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private auth: AuthService) {
    }
};
