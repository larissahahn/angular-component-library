import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewButtonComponent } from './addnew-button.component';

describe('AddnewButtonComponent', () => {
  let component: AddnewButtonComponent;
  let fixture: ComponentFixture<AddnewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
