import { Injectable } from '@angular/core';
//Archivo json
import _reportes from "../archivos json/reportes.json";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private reportes;
  
  constructor() { 
    this.setReportes();
  }

  private setReportes() {
    this.reportes = _reportes;
  }

  getReportes():Reporte[] {
    return this.reportes;
}

  addReporte(reporte:Reporte):void {
    this.reportes.unshift(reporte);
}

}

export interface Reporte {
  titulo:string;
  fecha:Date;
  ruta:string;
  prioridad:number;
  funcion:string;
  comentario:string;
  solucionado:boolean;
}

