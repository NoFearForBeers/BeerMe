import { Component } from '@angular/core';

import 'rxjs/add/operator/catch';

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
  public beerList: TopBeer[];

  constructor(private topBeerService: TopBeersService) {
  }

  ngOnInit() {
    this.topBeerService.getAllBeers()
                       .subscribe(data => this.beerList = data,
                                  err => console.log(err),
                                  () => console.log('!know')
                                 );

    console.log(this.beerList);
  }
}
