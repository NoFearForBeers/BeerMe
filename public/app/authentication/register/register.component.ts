import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private auth: AuthService) {
    }
};