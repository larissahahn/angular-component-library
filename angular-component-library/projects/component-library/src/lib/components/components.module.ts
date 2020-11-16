import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { ButtonComponent } from './button/button.component';
import { SignUpButtonComponent } from './signup-button/signup-button.component';
import { AddnewButtonComponent } from './addnew-button/addnew-button.component';
// import { EditButtonComponent } from './edit-button/edit-button.component';
// import { LoginButtonComponent } from './login-button/login-button.component';
// import { ComposeButtonComponent } from './compose-button/compose-button.component';
// import { DeleteButtonComponent } from './delete-button/delete-button.component';
// import { AddtocartButtonComponent } from './addtocart-button/addtocart-button.component';
import { PrintButtonComponent } from './print-button/print-button.component';
// import { SearchButtonComponent } from './search-button/search-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SignUpButtonComponent,
    AddnewButtonComponent,
    // EditButtonComponent,
    // LoginButtonComponent,
    // ComposeButtonComponent,
    // DeleteButtonComponent,
    // AddtocartButtonComponent,
    PrintButtonComponent
    // SearchButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [ButtonComponent, SignUpButtonComponent, AddnewButtonComponent, PrintButtonComponent]
})
export class ComponentsModule { }
