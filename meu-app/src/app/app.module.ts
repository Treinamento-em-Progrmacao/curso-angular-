import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCursoComponent } from './app-curso/app-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
