import { RouterModule, Routes } from '@angular/router';

import { ReporteComponent } from './Componente/reporte/reporte.component';
import {ReporteSolucionadoComponent} from './Componente/reporte-solucionado/reporte-solucionado.component'

const APP_ROUTES: Routes = [
  {path: '', component: ReporteSolucionadoComponent},
  {path: 'solucionados', component: ReporteSolucionadoComponent},
  {path: 'porSolucionar', component: ReporteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'receptes'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);