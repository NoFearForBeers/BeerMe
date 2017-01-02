import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/services/auth-guard.service';
import { pages } from './pages';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: pages.login },
    { path: 'register', component: pages.register },
    { path: 'home', component: pages.home },
    { path: 'user', component: pages.home, canActivate: [AuthGuard] },
    { path: 'top-beers/:id', component: pages.topBeersDetails },
    { path: 'top-beers', component: pages.topBeers },
    { path: 'beer-history', component: pages.beerHistory },
    { path: 'beer-ingredients', component: pages.beerIngredients },
    { path: 'beer-tasting', component: pages.beerTasting },
    { path: 'beer-types', component: pages.beerTypes },
    { path: 'beer-brands', component: pages.beerBrands },
    { path: 'news', component: pages.news },
    { path: 'news/:id', component: pages.newsDetails },
    { path: 'add-recipe', component: pages.addRecipe },
    { path: 'unapproved-recipes/:id', component: pages.unapprovedRecipesDetails },
    { path: 'events', component: pages.events },
    { path: 'events/:id', component: pages.eventsDetails },
    { path: 'unapproved-recipes', component: pages.unapprovedRecipes },
    { path: 'participations', component: pages.participations }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }