import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    // const heroes = [
    //   { id: 11, name: 'Dr Nice', likes: 5 },
    //   { id: 12, name: 'Narco', likes: 1 },
    //   { id: 13, name: 'Bombasto', likes: 0 },
    //   { id: 14, name: 'Celeritas', likes: 0 },
    //   { id: 15, name: 'Magneta', likes: 0 },
    //   { id: 16, name: 'RubberMan', likes: 0 },
    //   { id: 17, name: 'Dynama', likes: 0 },
    //   { id: 18, name: 'Dr IQ', likes: 3 },
    //   { id: 19, name: 'Magma', likes: 0 },
    //   { id: 20, name: 'Tornado', likes: 2 }
    // ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
