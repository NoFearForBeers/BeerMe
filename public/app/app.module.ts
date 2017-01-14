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
import { EventsModule } from './events/events.module';
import { ParticipationsModule } from './participations/participations.module';
import { RecipesModule } from './recipes/recipes.module';
import { ToastrModule } from 'toastr-ng2';
import { CarouselModule } from 'ng2-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Services
import { ExceptionService } from './shared/services/exception.service';


// Pipes
import { TakeRecentNewsPipe } from './shared/pipes/takeRecentNews';

// Directives
import { BackgroundDirective } from './shared/directives/background.directive';

@NgModule({
  imports: [
    ToastrModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    HttpModule,
    SharedModule,
    AuthenticationModule,
    TopBeersModule,
    BeerFactsModule,
    NewsModule,
    EventsModule,
    ParticipationsModule,
    RecipesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TakeRecentNewsPipe,
    BackgroundDirective
  ],
  bootstrap: [AppComponent],
  providers: [
    ExceptionService
  ]
})
export class AppModule { }
