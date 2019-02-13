import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  convert() {
    var doc = new jsPDF();
    this.reportes.forEach(function(employee, i){
        doc.text(5, 10 + (i * 20), 
            "Titulo: " + employee.titulo +
             " / "+
            "Fecha: " + employee.fecha);
        });
        this.reportes.forEach(function(employee, i){
          doc.text(10, 20 + (i * 20), 
              "Funcion: " + employee.funcion +
              "Comentario: " + employee.comentario);
        });
      
    doc.save('Test.pdf');
  }
  

}
