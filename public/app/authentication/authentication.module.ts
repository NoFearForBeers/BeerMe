import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard} from '../authentication/services/auth-guard.service';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [LoginComponent, RegisterComponent],
    declarations: [LoginComponent, RegisterComponent],
    providers: [ AuthService, AuthGuard, AUTH_PROVIDERS, ToastrService]
})
export class AuthenticationModule {
}
