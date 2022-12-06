import { Component } from '@angular/core';
import { MultiplicationserviceService } from 'src/services/multiplicationservice.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  [x: string]: any;

  constructor(private multservice:MultiplicationserviceService){

  }
  no1:any
  no2:any

  ans:any
  onSubmit(){
    // alert(this.no1+" "+this.no2)
    this.multservice.getAddition(this.no1,this.no2).subscribe(
      (data)=>{
        this.ans=JSON.stringify(data);
        alert(JSON.stringify(data))
      },
      (error)=>{
        alert(error)
      }
    )
}
}
