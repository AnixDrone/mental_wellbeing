import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingsComponent } from './testings.component';

describe('TestingsComponent', () => {
  let component: TestingsComponent;
  let fixture: ComponentFixture<TestingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
