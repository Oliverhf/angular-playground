import { Injectable } from '@angular/core';
import {Pokemon} from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor() { }

getPokemons() : Pokemon[] {
  return [{
      id: 1,
      name: 'pikachu',
      type: 'eletric',
      isActive: true,
      isStylish: true
    }, 
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isActive: false,
      isStylish: false
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isActive: false,
      isStylish: false
    },
    
    ];
}

}
