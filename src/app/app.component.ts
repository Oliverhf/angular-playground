import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
   pokemonName: string = "";

  constructor() {
    this.title = "Oliver";
  }

  handleClick(value: any) {
    console.log(value);
  }
}
