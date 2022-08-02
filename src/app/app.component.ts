import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isActive: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title: string = "basket of baby beavers";
   imgSrc: string = "https://townsquare.media/site/81/files/2021/06/attachment-Beaver-Photo-5.jpg?w=980&q=75"
   numberOne: number = 1;
   numberTwo: number = 2;
   togglePokemon: boolean = true;
   favoriteAnimal: string = "turtle";
   pokemonName2: string = "";
   pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'eletric',
    isActive: true
   }, 
   {
    id: 2,
    name: 'squirtle',
    type: 'water',
    isActive: false
   },
   {
    id: 3,
    name: 'charmander',
    type: 'fire',
    isActive: false
   },
   
  ];

  constructor() {
    this.title = "Oliver";
  }

  handleClick(value: any) {
    console.log(value);
  }

  handleChange(event : any) {
      this.pokemonName2 =  event.target.value;
  }
}
