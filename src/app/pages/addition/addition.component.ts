import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  no1:any
  no2:any

  onSubmit(){
    console.log(this.no1,this.no2)
  }
}
