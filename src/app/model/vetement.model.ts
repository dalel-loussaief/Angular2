import { Genre } from "./genre.model";

export class Vetement {
    find(arg0: (v: any) => boolean): Vetement {
      throw new Error('Method not implemented.');
    }
    idvetement! : number;
    nomvetement! : string;
    prixvetement! : number;
    dateprod! : Date ;
   //currentVetement: any;
    genre!:Genre;
    }