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

<<<<<<< HEAD
  constructor(private Addtionserv:AdditionService){

  }
  no1:any
  no2:any
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
=======
  onSubmit(){
    console.log(this.no1,this.no2)
>>>>>>> 33dd3285165c90cbd7ae0649542bde45be7b3425
  }
}
