import { Component } from '@angular/core';
import { AdditionService } from 'src/services/addition.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  no1:any
  no2:any


  constructor(private Addtionserv:AdditionService){

  }
  ans:any
  onSubmit(){
    // alert(this.no1+" "+this.no2)
    this.Addtionserv.getAddition(this.no1,this.no2).subscribe(
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
