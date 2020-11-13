import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing Angular Component Library
import { ComponentsModule } from 'component-library';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
