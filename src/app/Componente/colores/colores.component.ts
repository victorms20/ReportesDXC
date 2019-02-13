import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html'
})
export class ColoresComponent{

  @Output() dataOut = new EventEmitter()
  constructor() { }

  selectedValue: string;
  selectedFruit: string;

  colors: String[] = ["Poco urgente","Urgente","Muy Urgente"];
  
  enviaColor(colorEnviado){
    this.dataOut.emit(colorEnviado)
    
  }
}
