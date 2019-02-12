import { Injectable } from '@angular/core';
//Archivo json
import _reportes from "../archivos json/reportes.json";
import _vacio from "../archivos json/vacio.json";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private reportes;
  private reportesMargis;
  
  constructor() { 
    this.setReportes();
  }

  private setReportes() {
    this.reportes = _reportes;
  }

  getReportes():Reporte[] {
    this.reportesMargis = [];
    let ruta:string = window.location.pathname; 
    
    if(ruta == "/porSolucionar"){
      for(let report of this.reportes){
        if(report.solucionado == false){
          this.reportesMargis.push(report)
        }
      }
    }
    else {
      for(let report of this.reportes){
        if(report.solucionado == true){
          this.reportesMargis.push(report)
        }
      }
    }
    
     
    return this.reportesMargis;
}

  addReporte(reporte:Reporte):void {
    this.reportes.unshift(reporte);
}

cambioDeEstado(referencia:string):void{
  let indice = this.buscarEnArrayRep(referencia, this.reportes)
  if(this.reportes[indice].solucionado == true){
    this.reportes[indice].solucionado = false;
  }else{
    this.reportes[indice].solucionado = true;
  }
  
}

buscarEnArrayRep(referencia:string, lista:Reporte[] ):number{
  let contador = 0;
  for(let rep of lista){
    let titulorec:string = rep.titulo
    if(referencia == titulorec){
      break
    }
    else contador += 1
  }
  return contador
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

