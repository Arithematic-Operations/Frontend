import { Component } from '@angular/core';
import { SubstractionservicesService } from 'src/services/substractionservices.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  constructor(private substractionService:SubstractionservicesService){

  }
  no1:any
  no2:any

  ans:any
  onSubmit(){
    // alert(this.no1+" "+this.no2)
    this.substractionService.getAddition(this.no1,this.no2).subscribe(
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
