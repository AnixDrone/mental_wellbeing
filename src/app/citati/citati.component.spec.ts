import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitatiComponent } from './citati.component';

describe('CitatiComponent', () => {
  let component: CitatiComponent;
  let fixture: ComponentFixture<CitatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
