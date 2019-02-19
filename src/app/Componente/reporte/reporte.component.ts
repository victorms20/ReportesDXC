import {Component, Input, OnInit} from '@angular/core';
import {Reporte, ServicesService} from '../../service/services.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {
<<<<<<< .mine





=======
  reporte: Reporte;
  RepEliminado: Reporte;
  reportes: Reporte[];
  contador: number = 0;
  trobat = false;
>>>>>>> .theirs

  public reporte:Reporte;
  public RepEliminado:Reporte;
  public reportes;
  public contador:number = 0;
  public trobat = false;
  public timer;

<<<<<<< .mine

  @Input()datosProyecto: string[];
=======
  @Input() datosProyecto: string[];

>>>>>>> .theirs

  constructor(private reportesService: ServicesService) {
  }

  ngOnInit() {   
   this.reportes = this.reportesService.getReportes(); 
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
