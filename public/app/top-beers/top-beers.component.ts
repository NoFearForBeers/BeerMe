import { Component } from '@angular/core';

import { PageComponent } from '../shared/page.component';
import { TopBeer } from './top-beers.model';
import { TopBeersService } from './top-beers.service';

@Component({
  moduleId: module.id,
  selector: 'top-beers',
  templateUrl: './top-beers.component.html'
//   styleUrls: ['./app.component.css']
})

export class TopBeersComponent implements PageComponent {
  private beerList: TopBeer[];

  constructor(private topBeerService: TopBeersService) {
  }

  ngOnInit() {
    this.topBeerService.getAllBeers()
                       .subscribe(beerList => this.beerList = beerList);

    console.log(this.beerList);
  }
}
