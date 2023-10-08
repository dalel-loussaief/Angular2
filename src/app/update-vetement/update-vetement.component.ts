import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../service/VetementService';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
 
})
export class UpdateVetementComponent implements OnInit{
  currentVetement = new Vetement();
  genre! : Genre[];
  updatedGeId!:number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private vetementService: VetementService) { }
  ngOnInit(): void {
  
    
    this.vetementService.listeGenre().
    subscribe(ge => {console.log(ge);
    this.genre = ge._embedded.genres;
    }
    );
 this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']).subscribe( v =>{ this.currentVetement = v;
   this.updatedGeId = this.currentVetement.genre.idG;
    } ) ;
  }
  updateVetement(){
    this.currentVetement.genre = this.genre.
    find(ge => ge.idG == this.updatedGeId)!;
    this.vetementService.updateVetement(this.currentVetement).subscribe(vet => {
      this.router.navigate(['vetements']); }
      );
      
  }
}
