import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazniComponent } from './prikazni.component';

describe('PrikazniComponent', () => {
  let component: PrikazniComponent;
  let fixture: ComponentFixture<PrikazniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
