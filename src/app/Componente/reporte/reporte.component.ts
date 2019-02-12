import { Component, OnInit, Input } from '@angular/core';

import { ServicesService, Reporte } from '../../service/services.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {
  reporte:Reporte;
  reportes:Reporte[];

  @Input()datosProyecto: string[];

  constructor(private reportesService:ServicesService) { }

  ngOnInit() {
    this.reportes = this.reportesService.getReportes();
  }

}
