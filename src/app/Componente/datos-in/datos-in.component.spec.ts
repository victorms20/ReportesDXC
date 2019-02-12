import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInComponent } from './datos-in.component';

describe('DatosInComponent', () => {
  let component: DatosInComponent;
  let fixture: ComponentFixture<DatosInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
