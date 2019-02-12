import { Component, OnInit } from '@angular/core';

import { ServicesService, Reporte } from '../../service/services.service';

@Component({
  selector: 'app-datos-in',
  templateUrl: './datos-in.component.html',
  styleUrls: ['./datos-in.component.css']
})
export class DatosInComponent implements OnInit {
  prioridad_default = "verde";
  recivirEvento: string;
  prioridadDinamica:number;

  selectedValue: string;
  selectedFruit: string;
  color:String[] = ["verde","amarillo","rojo"];

  titulo_error = false;
  fecha_error = false;
  ruta_error = false;
  funcion_error = false;

  constructor(private reportesServices:ServicesService) { }

  ngOnInit() {
    this.titulo_error = false;
    this.fecha_error = false;
    this.ruta_error = false;
    this.funcion_error = false;
  }

  getColor(e){
    this.recivirEvento = e;
    console.log(this.recivirEvento)
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
