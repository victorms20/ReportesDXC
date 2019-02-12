import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/*Materials*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*Animaciones*/ 
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
/*FxFlex*/ 
import {FlexLayoutModule} from '@angular/flex-layout';
/*Base de datos*/
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';
/*Servicios*/
import { ServicesService } from './service/services.service';

import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { ReporteComponent } from './Componente/reporte/reporte.component';
import { DatosInComponent } from './Componente/datos-in/datos-in.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReporteSolucionadoComponent } from './Componente/reporte-solucionado/reporte-solucionado.component';
import { ColoresComponent } from './Componente/colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    ReporteComponent,
    DatosInComponent,
    ReporteSolucionadoComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTING,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule,
    ServicesService,
    AdunitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }