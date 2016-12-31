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
import { RecipesModule } from './recipes/recipes.module';
import { ToastrModule } from 'toastr-ng2';
import { CarouselModule } from 'ng2-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Services
import { RequesterService } from './shared/services/requester.service';
import { ExceptionService } from './shared/services/exception.service';


// Pipes
import { SortNewsPipe } from './shared/pipes/sortNews';

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
    RecipesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SortNewsPipe
  ],
  bootstrap: [AppComponent],
  providers: [
    RequesterService,
    ExceptionService
  ]
})
export class AppModule { }
