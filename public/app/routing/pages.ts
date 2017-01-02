import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { HomeComponent } from '../home/home.component';
import { TopBeersComponent } from '../top-beers/top-beers-list/top-beers.component';
import { TopBeersDetailsComponent } from '../top-beers/top-beers-details/top-beers-details.component';
import { BeerHistoryComponent } from '../beer-facts/beer-history/beer-history.component';
import { BeerIngredientsComponent } from '../beer-facts/beer-ingredients/beer-ingredients.component';
import { BeerTastingComponent } from '../beer-facts/beer-tasting/beer-tasting.component';
import { BeerTypesComponent } from '../beer-facts/beer-types/beer-types.component';
import { BeerBrandsComponent } from '../beer-facts/beer-brands/beer-brands.component';
import { NewsComponent } from '../news/news-list/news.component';
import { NewsDetailsComponent } from '../news/news-details/news-details.component';
import { AddRecipeComponent } from '../recipes/add-recipe/add-recipe.component';
import { EventsComponent } from '../events/events-main/events.component';
import { EventsDetailComponent } from '../events/events-detail/events-detail.component';
import { UnapprovedRecipesComponent } from '../recipes/unapproved-recipes/unapproved-recipes.component';
import { UnapprovedRecipesDetailsComponent } from '../recipes/unapproved-recipes-details/unapproved-recipes-details.component';

export const pages = {
    login: LoginComponent,
    register: RegisterComponent,
    home: HomeComponent,
    topBeers: TopBeersComponent,
    topBeersDetails: TopBeersDetailsComponent,
    beerHistory: BeerHistoryComponent,
    beerIngredients: BeerIngredientsComponent,
    beerTasting: BeerTastingComponent,
    beerTypes: BeerTypesComponent,
    beerBrands: BeerBrandsComponent,
    news: NewsComponent,
    newsDetails: NewsDetailsComponent,
    addRecipe: AddRecipeComponent,
    unapprovedRecipes: UnapprovedRecipesComponent,
    unapprovedRecipesDetails: UnapprovedRecipesDetailsComponent
    events: EventsComponent,
    eventsDetails: EventsDetailComponent
    unapprovedRecipes: UnapprovedRecipesComponent
};
