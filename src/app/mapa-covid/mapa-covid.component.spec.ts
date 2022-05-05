import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCovidComponent } from './mapa-covid.component';

describe('MapaCovidComponent', () => {
  let component: MapaCovidComponent;
  let fixture: ComponentFixture<MapaCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
