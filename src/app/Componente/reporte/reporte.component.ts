import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ServicesService, Reporte } from '../../service/services.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {

  public reporte:Reporte;
  public RepEliminado:Reporte;
  public reportes;
  public contador:number = 0;
  public trobat = false;
  public timer;


  @Input()datosProyecto: string[];

  constructor(private reportesService:ServicesService) { }

  ngOnInit() {   
   this.reportes = this.reportesService.getReportes(); 
  }
  convert(reporteAExportar) {
    this.reportesService.convert(reporteAExportar)
  }
  
 
  onClick(reporteABorrar)
  {  
    this.reportes.splice(this.reportesService.buscarEnArrayRep(reporteABorrar,this.reportes), 1);
    this.reportesService.cambioDeEstado(reporteABorrar);
  }

}
