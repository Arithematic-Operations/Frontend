import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './pages/addition/addition.component';
import { MultiplicationComponent } from './pages/multiplication/multiplication.component';
import { SubstractionComponent } from './pages/substraction/substraction.component';

const routes: Routes = [
  {
    path:"add",
    component:AdditionComponent,
    pathMatch:'full'
  },
  {
    path:"sub",
    component:SubstractionComponent,
    pathMatch:'full'
  }
  ,{
    path:"mul",
    component:MultiplicationComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
