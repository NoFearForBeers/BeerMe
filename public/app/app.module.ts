
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';

//  Pages
import { SuperheroesListPage } from './pages/superheroes/superheroes.component';

//  Services
import { SuperheroesService } from './services/suprheroes/superheroes.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SuperheroesListPage
  ],
  bootstrap: [AppComponent],
  providers: [
    SuperheroesService
  ]
})
export class AppModule { }
