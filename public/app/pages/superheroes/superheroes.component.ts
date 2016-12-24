import { Component } from '@angular/core';
import { PageComponent } from '../page.component';
import { SuperheroesService } from '../../services/suprheroes/superheroes.service';
import { Superhero } from '../../models/superhero.model';

@Component({
    moduleId: module.id,
    templateUrl: './superheroes.component.html'
})
export class SuperheroesListPage implements PageComponent {
    superheroes: Superhero[] = [];

    constructor(private superheroesData: SuperheroesService) { }

    ngOnInit() {
        this.superheroesData.getAll()
            .subscribe(superheroes => {
                this.superheroes = superheroes;
            });
    }
}