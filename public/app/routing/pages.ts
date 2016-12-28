import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { HomeComponent } from '../home/home.component';
import { TopBeersComponent } from '../top-beers/top-beers-list/top-beers.component';
import { TopBeersDetailsComponent } from '../top-beers/top-beers-details/top-beers-details.component';
import { BeerHistoryComponent } from '../beer-facts/beer-history/beer-history.component';
import { BeerIngredientsComponent } from '../beer-facts/beer-ingredients/beer-ingredients.component';
import { NewsComponent } from '../news/news-list/news.component';
import { NewsDetailsComponent } from '../news/news-details/news-details.component';

export const pages = {
    login: LoginComponent,
    register: RegisterComponent,
    home: HomeComponent,
    topBeers: TopBeersComponent,
    topBeersDetails: TopBeersDetailsComponent,
    beerHistory: BeerHistoryComponent,
    beerIngredients: BeerIngredientsComponent,
    news: NewsComponent,
    newsDetails: NewsDetailsComponent,
};
