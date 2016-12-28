import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { TopBeer } from '../top-beers.model';
import { TopBeersService } from '../services/top-beers.service';

@Component({
  moduleId: module.id,
  selector: 'top-beers',
  templateUrl: './top-beers.component.html'
//   styleUrls: ['./app.component.css']
})

export class TopBeersComponent implements PageComponent {
  beerList: TopBeer[] = [];

  constructor(private topBeersService: TopBeersService) {
  }

  ngOnInit() {
    this.topBeersService.getAllBeers()
                       .subscribe(beers => this.beerList = beers);
  }
}
