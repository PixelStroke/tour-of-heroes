import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Always annotate Component symbol with '@'
// The @Component decorator function specifies Angular metadata.
//
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Michael Scott'
  }
  // Property decleration
  //
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) { }

  // Subscribe to observable
  getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}