import { Component, OnInit } from '@angular/core';

import { ServicesService, Reporte } from '../../service/services.service';
<<<<<<< .mine
import { Services } from '@angular/core/src/view';
=======
import { FormGroup } from '@angular/forms';
>>>>>>> .theirs

@Component({
  selector: 'app-datos-in',
  templateUrl: './datos-in.component.html',
  styleUrls: ['./datos-in.component.css']
})
export class DatosInComponent implements OnInit {
  prioridad_default = "verde";
  recivirEvento: string;
  prioridadDinamica:number;

  active:boolean = true;

  selectedValue: string;
  selectedFruit: string;
  color:String[] = ["verde","amarillo","rojo"];

  titulo_error = false;  fecha_error = false;
  ruta_error = false;
  funcion_error = false;
  constructor(private reportesServices:ServicesService) { }

  ngOnInit() {
    let test: any
    this.titulo_error = false;
    this.fecha_error = false;
    this.ruta_error = false;
    this.funcion_error = false;0
    this.reportesServices.reportess.subscribe(
      data => {
        test = data;
        this.reportesServices.setReporters(test);
      });
      
  }

  getColor(e){
    this.recivirEvento = e;
<<<<<<< .mine

=======
    console.log(this.recivirEvento);
>>>>>>> .theirs
  }

  clear() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  AfegirReporte(tituloReporte:string, fechaReporte:Date, rutaReporte:string, funcionReporte:string, comentarioReporte:string) {
    
    if(this.recivirEvento == "Muy Urgente"){
      this.prioridadDinamica = 3;
    }
    else if(this.recivirEvento == "Urgente"){
      this.prioridadDinamica = 2;               
    }else{
      this.prioridadDinamica = 1;
    }

    if (!tituloReporte || !fechaReporte || !rutaReporte || !funcionReporte) {
      if (!tituloReporte) {
       this.titulo_error = true;
      }
      if (!fechaReporte) {
       this.fecha_error = true;
      }
      if (!rutaReporte) {
       this.ruta_error = false;
      }
      if (!funcionReporte) {
       this.funcion_error = true;
      }
     } else {
      let reporte:Reporte = {
        titulo: tituloReporte,
        fecha: fechaReporte,
        ruta: rutaReporte,
        prioridad: this.prioridadDinamica,
        funcion: funcionReporte,
        comentario: comentarioReporte,
        solucionado: false
      };

      this.reportesServices.addReporte(reporte);  
      this.reportesServices.getReportes();      
     }                      
                     
  }

}
