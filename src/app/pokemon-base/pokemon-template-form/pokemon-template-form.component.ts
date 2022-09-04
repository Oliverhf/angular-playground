import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [ 
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
  ]
  
  toggleIsCool(object: any) {
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }
  
  constructor(private pokemonService: PokemonService) { 

  }


  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

}
