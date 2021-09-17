import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// Always annotate Component symbol with '@'
// The @Component decorator function specifies Angular metadata.
//
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Property decleration
  //
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Subscribe to observable
  getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);   
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  

}