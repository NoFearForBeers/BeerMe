import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

//  Authentication
import { LoginPage } from './authentication/login/login.page';
import { RegisterPage } from './authentication/register/register.page';
import { AuthGuard } from './authentication/services/auth-guard.service';
import { Auth } from './authentication/services/auth.service';

//  Users
import { UserService } from './users/services/user.service';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RegisterPage,
    LoginPage
  ],
  bootstrap: [AppComponent],
  providers: [ 
    AUTH_PROVIDERS,
    AuthGuard,
    Auth,
    UserService
  ]
})
export class AppModule { }
