import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFormComponentComponent } from './secondary-form-component.component';

describe('SecondaryFormComponentComponent', () => {
  let component: SecondaryFormComponentComponent;
  let fixture: ComponentFixture<SecondaryFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
