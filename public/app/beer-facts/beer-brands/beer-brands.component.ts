import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { BeerBrands } from './beer-brands.model';
import { BeerBrandsService } from './beer-brands.service';

@Component({
  moduleId: module.id,
  selector: 'beer-brands',
  templateUrl: './beer-brands.component.html',
  styleUrls: ['./beer-brands.component.css']
})

export class BeerBrandsComponent implements PageComponent {
  beerBrandsList: BeerBrands[] = [];

  constructor(private beerBrandsService: BeerBrandsService) {
  }

  ngOnInit() {
    this.beerBrandsService.getAllBeerBrands()
                       .subscribe(beer => this.beerBrandsList = beer);
  }
}
