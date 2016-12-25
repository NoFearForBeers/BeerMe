import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './routing/app-routing.module';

//  Authentication
import { AuthenticationModule } from './authentication/authentication.module';

//  Users
import { UserService } from './users/services/user.service';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService
  ]
})
export class AppModule { }
