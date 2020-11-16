import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpButtonComponent } from './signup-button.component';

describe('SignupButtonComponent', () => {
  let component: SignUpButtonComponent;
  let fixture: ComponentFixture<SignUpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
