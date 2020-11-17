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

// I might refactor if number of components in library exceeds 35 to put
// the buttons in their own ButtonsModule etc.
import { ButtonComponent } from './button/button.component';
import { SignUpButtonComponent } from './signup-button/signup-button.component';
import { AddnewButtonComponent } from './addnew-button/addnew-button.component';
// import { LoginButtonComponent } from './login-button/login-button.component';
import { ComposeButtonComponent } from './compose-button/compose-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
// import { AddtocartButtonComponent } from './addtocart-button/addtocart-button.component';
import { PrintButtonComponent } from './print-button/print-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { DeleteInlineButtonComponent } from './delete-inline-button/delete-inline-button.component';
import { AddInlineButtonComponent } from './add-inline-button/add-inline-button.component';
// import { SearchButtonComponent } from './search-button/search-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SignUpButtonComponent,
    AddnewButtonComponent,
    EditButtonComponent,
    // LoginButtonComponent,
    ComposeButtonComponent,
    DeleteButtonComponent,
    // AddtocartButtonComponent,
    PrintButtonComponent,
    SaveButtonComponent,
    DeleteInlineButtonComponent,
    AddInlineButtonComponent
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
  exports: [
    ButtonComponent, // Will alphabatize the order of these at the end
    SignUpButtonComponent,
    AddnewButtonComponent,
    PrintButtonComponent,
    DeleteButtonComponent,
    ComposeButtonComponent,
    EditButtonComponent,
    SaveButtonComponent,
    DeleteInlineButtonComponent,
    AddInlineButtonComponent
  ]
})
export class ComponentsModule { }
