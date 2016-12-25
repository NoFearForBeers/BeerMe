
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { CoreModule } from './shared/core.module';


//  Pages
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

//  Services
import { UserService } from './services/user/user.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { Auth } from './services/auth/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
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
