import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { BeerTypes } from './beer-types.model';
import { BeerTypesService } from './beer-types.service';

@Component({
  moduleId: module.id,
  selector: 'beer-types',
  templateUrl: './beer-types.component.html'

})

export class BeerTypesComponent implements PageComponent {
  beerTypesList: BeerTypes[] = [];

  constructor(private beerTypesService: BeerTypesService) {
  }

  ngOnInit() {
    this.beerTypesService.getAllBeerTypes()
                       .subscribe(beers => this.beerTypesList = beers);
  }
}
