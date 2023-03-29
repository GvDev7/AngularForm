import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFormComponentComponent } from './primary-form-component.component';

describe('PrimaryFormComponentComponent', () => {
  let component: PrimaryFormComponentComponent;
  let fixture: ComponentFixture<PrimaryFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
