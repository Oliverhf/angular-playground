import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonBaseModule { }
