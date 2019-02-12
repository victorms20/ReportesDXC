import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSolucionadoComponent } from './reporte-solucionado.component';

describe('ReporteSolucionadoComponent', () => {
  let component: ReporteSolucionadoComponent;
  let fixture: ComponentFixture<ReporteSolucionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSolucionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSolucionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
