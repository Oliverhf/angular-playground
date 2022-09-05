import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {Pokemon} from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit {

  pokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef

  constructor(private pokemonService: PokemonService) {

  }


  ngAfterViewInit(): void {
    console.log(this.pokemonTh)
    this.pokemonTh.nativeElement.innerText = "Pokemon Name";
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    });
  }

}
