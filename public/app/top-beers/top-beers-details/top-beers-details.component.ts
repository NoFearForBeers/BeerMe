import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { TopBeer } from '../top-beers.model';
import { TopBeersService } from '../top-beers.service';

@Component({
    moduleId: module.id,
    selector: 'top-beers-details',
    templateUrl: './top-beers-details.component.html'
})
export class TopBeersDetailsComponent implements PageComponent {
    beer: TopBeer;

    constructor(
        private topBeersService: TopBeersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        //console.log(this.route.params);
        this.route.params
            .switchMap((params: Params) => this.topBeersService.getBeerById(params['id']))
            .subscribe(beer => this.beer = beer);
    }
}