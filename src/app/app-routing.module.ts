import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';



const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path:"add-vetements",component:AddVetementComponent},
  {path : "updateVetement/:id", component:UpdateVetementComponent},
  {path : "rechercheParGenre", component:RechercheParGenreComponent},
  {path : "rechercheParNom", component:RechercheParNomComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
