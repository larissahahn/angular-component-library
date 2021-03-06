import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeButtonComponent } from './compose-button.component';

describe('ComposeButtonComponent', () => {
  let component: ComposeButtonComponent;
  let fixture: ComponentFixture<ComposeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
