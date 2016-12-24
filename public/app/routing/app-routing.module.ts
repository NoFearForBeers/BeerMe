import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pages } from '../pages/index';

const appRoutes: Routes = [
    { path: 'login', component: pages.login },
    { path: 'login-callback', redirectTo: '/', pathMatch: 'full' },
    { path: 'register', component: pages.register },
    { path: 'superheroes', component: pages.superheroes },
    { path: '', component: pages.superheroes }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }