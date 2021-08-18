import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepresijaComponent } from './depresija.component';

describe('DepresijaComponent', () => {
  let component: DepresijaComponent;
  let fixture: ComponentFixture<DepresijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepresijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepresijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
