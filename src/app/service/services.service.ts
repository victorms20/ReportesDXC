import { Injectable } from '@angular/core';
//Archivo json
import _reportes from "../archivos json/reportes.json";
import _vacio from "../archivos json/vacio.json";
//Exportador pdf
import * as jsPDF from 'jspdf';


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

convert(reporteAExportar) {
  let linea = " "
  let y = 0;
  let saltoDeLina = 80
  let indice = this.buscarEnArrayRep(reporteAExportar, this.reportes);
  let reporteBuscado = this.reportes[indice]
  var doc = new jsPDF();
  doc.addPage();
  doc.setPage(1);
  
      doc.setFontSize(25);
      doc.text(70, 10,"Informe Incidencia");
      doc.setFontSize(15);
      doc.text(5, 20,"Titulo: " + reporteBuscado.titulo);
      doc.text(5, 30,"Fecha: " + reporteBuscado.fecha);
      doc.text(5, 40,"Ruta: " + reporteBuscado.ruta);
      doc.text(5, 50,"Prioridad:")
      if(reporteBuscado.prioridad == 1){
        doc.text(5, 60,"Poco Urgente")
      }
      else if(reporteBuscado.prioridad == 2){
        doc.text(5, 60,"Urgente")
      }else{
        doc.text(5, 60,"Muy urgente")
      }       
      doc.text(5, 70,"Funcion:")
      doc.setFontSize(12);
      doc.setTextColor(0, 102, 255)
      while(y < reporteBuscado.funcion.length){
        linea = " "
        let aux = y + 80          
          for(let i = y; i < aux; i++){
            if(i < reporteBuscado.funcion.length)linea += reporteBuscado.funcion[i];
          }    
        y+=80
        doc.text(20,saltoDeLina, linea)
        saltoDeLina += 10
      }
      doc.setPage(2);
      saltoDeLina = 15;
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0)
      doc.text(5, saltoDeLina,"Motivo:");
      doc.setFontSize(12);
      doc.setTextColor(0, 102, 255)
      saltoDeLina += 10;
      linea = " "
      y = 0;
      while(y < reporteBuscado.comentario.length){
        linea = " "
        let aux = y + 80          
          for(let i = y; i < aux; i++){
            if(i < reporteBuscado.comentario.length)linea += reporteBuscado.comentario[i];
          }    
        y+=80
        doc.text(20,saltoDeLina, linea)
        saltoDeLina += 10
      }
      

  doc.save(reporteBuscado.titulo + "/" + reporteBuscado.fecha + ".pdf");
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