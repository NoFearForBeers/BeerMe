import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pages } from '../pages/index';

const appRoutes: Routes = [
    { path: 'superheroes', component: pages.superheroes }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }