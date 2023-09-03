import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    
    
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
