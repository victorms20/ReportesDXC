import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'proyectoReports';
  nombreExp:string = "Aguacate en vinagre";
  fechaExp: string = '12/01/1992';
  codigoImplicadoExp: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien risus, vehicula at mauris id, volutpat pretium enim. Suspendisse potenti. Phasellus euismod, neque sit amet mattis consequat, orci elit varius tellus, sed fringilla risus urna eget ante. Quisque eget risus odio. Integer vitae justo vel neque dictum lobortis. Phasellus purus lectus, ultricies eu ex et, condimentum suscipit metus. Morbi a lacus ut orci lobortis varius"
  tituloExp: string= "los Aguacates han quedado demasiado avinagrados";
  CometnarioExp: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien risus, vehicula at mauris id, volutpat pretium enim. Suspendisse potenti. Phasellus euismod, neque sit amet mattis consequat, orci elit varius tellus, sed fringilla risus urna eget ante. Quisque eget risus odio. Integer vitae justo vel neque dictum lobortis. Phasellus purus lectus, ultricies eu ex et, condimentum suscipit metus. Morbi a lacus ut orci lobortis varius";
  rutaExp: string = "\Users\DXCUser\Downloads";
  arrayDDatos: string[] = [this.nombreExp, this.CometnarioExp, this.fechaExp, this.tituloExp, this.codigoImplicadoExp, this.rutaExp];
}
