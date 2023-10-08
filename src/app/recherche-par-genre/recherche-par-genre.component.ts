import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../service/VetementService';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',

})
export class RechercheParGenreComponent implements OnInit{
  vetements!: Vetement[]; 
  idG!:number;
  genre!:Genre[];
  vetementsService: any;
  constructor(private vetementService : VetementService){ }

  


ngOnInit(): void {
  this.vetementService.listeGenre().
  subscribe(ge => {this.genre = ge._embedded.genres;
  console.log(ge);
});
}





onChange(){
  this.vetementService.rechercherParGenre(this.idG).subscribe(vet =>{this.vetements=vet});
}

}
