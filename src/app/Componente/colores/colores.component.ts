import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html'
})
export class ColoresComponent{

  constructor() { }

  selectedValue: string;
  selectedFruit: string;

  colors: String[] = ["Poco urgente","Urgente","muy Urgente"];

}
