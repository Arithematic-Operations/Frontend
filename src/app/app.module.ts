import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './pages/addition/addition.component';
import { SubstractionComponent } from './pages/substraction/substraction.component';
import { MultiplicationComponent } from './pages/multiplication/multiplication.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 33dd3285165c90cbd7ae0649542bde45be7b3425
@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubstractionComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    FormsModule
>>>>>>> 33dd3285165c90cbd7ae0649542bde45be7b3425
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
