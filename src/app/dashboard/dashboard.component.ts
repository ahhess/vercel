import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        // this.heroes = heroes.slice(1, 5)
        this.heroes = heroes;
        // heroes.map(hero => hero.likes).sort().reduce(this.heroes.push(hero));
        this.heroes.sort(hero => hero.likes);
        const l = heroes.length;
        var s = 0;
        if (l >= 4) {
          s = l - 4;
        }
        this.heroes = this.heroes.slice(s, l);
      });
  }
}
