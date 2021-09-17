import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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
  constructor() { }

  ngOnInit(): void {
  }

}
