import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Router } from '@angular/router';
import { VetementService } from '../service/VetementService';
@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',

})
export class VetementsComponent implements OnInit{
  
  vetements!: Vetement[]; 



    constructor(private vetementService : VetementService,public router:Router){
      //this.vetements=vetementService.listVetement();
     
    
  }
  ngOnInit(): void {
    //this.vetements=this.vetementService.listVetement();
    /*this.vetementService.listVetement().subscribe(vet => {
      console.log(vet);
      this.vetements = vet;
      });*/
      this.chargerVetements();
  }

  chargerVetements(){
    this.vetementService.listVetement().subscribe(vets => {
    console.log(vets);
    this.vetements = vets;
    });
    }

  supprimerVetement(v: Vetement)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.vetementService.supprimerVetement(v.idvetement).subscribe(() => {
  console.log("vetement supprimé");
  this.chargerVetements();
  });
  } 



 
   
   
}
