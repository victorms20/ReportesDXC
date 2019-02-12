import { Component, OnInit, Input } from '@angular/core';

import { ServicesService, Reporte } from '../../service/services.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {
  reporte:Reporte;
  RepEliminado:Reporte;
  reportes:Reporte[];
  contador:number = 0;
  trobat = false


  @Input()datosProyecto: string[];

  constructor(private reportesService:ServicesService) { }

  ngOnInit() {
    this.reportes = this.reportesService.getReportes();
  }

  onClick(reporteABorrar)
  {  
    this.reportes.splice(this.reportesService.buscarEnArrayRep(reporteABorrar,this.reportes), 1);
    this.reportesService.cambioDeEstado(reporteABorrar);
  }

}
