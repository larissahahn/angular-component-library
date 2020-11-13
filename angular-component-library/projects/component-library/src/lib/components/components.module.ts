import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ButtonComponent } from './button/button.component';
import { SignUpButtonComponent } from './signup-button/signup-button.component';
import { AddnewButtonComponent } from './addnew-button/addnew-button.component';

@NgModule({
  declarations: [ButtonComponent, SignUpButtonComponent, AddnewButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [ButtonComponent, SignUpButtonComponent, AddnewButtonComponent]
})
export class ComponentsModule { }
