import { Component, OnInit } from '@angular/core';

// Always annotate Component symbol with '@'
// The @Component decorator function specifies Angular metadata.
//
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Michael Scott'
  constructor() { }

  ngOnInit(): void {
  }

}
