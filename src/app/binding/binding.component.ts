import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit{


titre: string="demo "
status:boolean=true;
constructor(){

}

  ngOnInit(): void {
 
  }

}
