import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInlineButtonComponent } from './add-inline-button.component';

describe('AddInlineButtonComponent', () => {
  let component: AddInlineButtonComponent;
  let fixture: ComponentFixture<AddInlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInlineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
