import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInlineButtonComponent } from './delete-inline-button.component';

describe('DeleteInlineButtonComponent', () => {
  let component: DeleteInlineButtonComponent;
  let fixture: ComponentFixture<DeleteInlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInlineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
