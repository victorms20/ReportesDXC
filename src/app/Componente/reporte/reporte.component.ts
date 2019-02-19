import {Component, Input, OnInit} from '@angular/core';
import {Reporte, ServicesService} from '../../service/services.service';
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


  constructor(private reportesService: ServicesService) {
  }

  ngOnInit() {   
   setTimeout(()=>this.reportes = this.reportesService.getReportes() , 500); 
  }

  convert(reporteAExportar) {
    this.reportesService.convert(reporteAExportar);
  }

  color(numero: number) {
    console.log(numero);
  }

  onClick(reporteABorrar) {
    this.reportes.splice(this.reportesService.buscarEnArrayRep(reporteABorrar, this.reportes), 1);
    this.reportesService.cambioDeEstado(reporteABorrar);
  }

}
