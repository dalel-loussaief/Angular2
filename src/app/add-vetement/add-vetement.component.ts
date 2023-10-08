import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../service/VetementService';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
})
export class AddVetementComponent implements OnInit{
  message!:string;
  newIdG!:number;
  genre!:Genre[];
  newGenre!:Genre;
  newVetement=new Vetement();
  constructor(private vetementService : VetementService,
    private router :Router){}
  addVetement(){

    this.newVetement.genre = this.genre.find(gen => gen.idG == this.newIdG)!;
this.vetementService.ajouterVetement(this.newVetement)
.subscribe(vet => {
console.log(vet);
this.router.navigate(['vetements']);
});
 }




  ngOnInit(): void {
  // this.genre=this.vetementService.listeGenre();
  this.vetementService.listeGenre().
subscribe(gen => {this.genre = gen._embedded.genres;
console.log(gen);
});


  }
  

}
