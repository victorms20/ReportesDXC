import { Component, OnInit, Input } from '@angular/core';
import { ServicesService, Reporte } from '../../service/services.service';

@Component({
  selector: 'app-reporte-solucionado',
  templateUrl: './reporte-solucionado.component.html',
  styleUrls: ['./reporte-solucionado.component.css']
})
export class ReporteSolucionadoComponent implements OnInit {

  reportes:Reporte[];

  @Input()datosProyecto: string[];

  constructor(private reportesService:ServicesService) { }

  ngOnInit() {
    setTimeout(()=>this.reportes = this.reportesService.getReportes() , 500); 
  }
  convert(reporteAExportar) {
    this.reportesService.convert(reporteAExportar)
  }

  onClick(reporteABorrar){
    this.reportes.splice(this.reportesService.buscarEnArrayRep(reporteABorrar,this.reportes), 1);
    this.reportesService.cambioDeEstado(reporteABorrar);
  }
}