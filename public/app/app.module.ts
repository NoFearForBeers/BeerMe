import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//  Moduls
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { TopBeersModule } from './top-beers/top-beers.module';
import { BeerFactsModule } from './beer-facts/beer-facts.module';
import { NewsModule } from './news/news.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Services
import { UserService } from './users/services/user.service';
import { RequesterService } from './shared/services/requester.service';
import { ExceptionService } from './shared/services/exception.service';
import { ToastService } from './shared/services/toast.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AuthenticationModule,
    TopBeersModule,
    BeerFactsModule,
    NewsModule,
    AppRoutingModule 
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    RequesterService,
    ExceptionService,
    ToastService
  ]
})
export class AppModule { }
