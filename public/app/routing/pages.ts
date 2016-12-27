import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { HomeComponent } from '../home/home.component';
import { TopBeersComponent } from '../top-beers/top-beers.component';
import { TopBeersDetailsComponent } from '../top-beers/top-beers-details/top-beers-details.component';

export const pages = {
    login: LoginComponent,
    register: RegisterComponent,
    home: HomeComponent,
    topBeers: TopBeersComponent,
    topBeersDetails: TopBeersDetailsComponent
};
