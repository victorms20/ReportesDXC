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
import { FilterPipe} from './filter.pipe';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment'
import {AngularFirestoreModule} from '@angular/fire/firestore';



@NgModule({
 
  declarations: [
    AppComponent,
    ReporteComponent,
    DatosInComponent,
    ReporteSolucionadoComponent,
    ColoresComponent,
    FilterPipe,

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
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'incidencias'),
    AngularFirestoreModule   
  ],
  providers: [
    MatDatepickerModule,
    ServicesService,
    AdunitService,
    AngularFireModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
