
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CardPlanetsComponent } from './card-planets';

@NgModule({
   declarations: [
      AppComponent,
      CardPlanetsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule, MatButtonModule,
      HttpClientModule
      // FormsModule,
      // ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

