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
    { path: 'top-beers', component: pages.topBeers}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }