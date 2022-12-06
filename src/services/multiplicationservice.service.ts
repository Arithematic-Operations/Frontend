import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MultiplicationserviceService {

  constructor(private http:HttpClient) { }

  public getAddition(no1:any,no2:any){
    return this.http.get(`http://localhost:9092/operation/mul/${no1}/${no2}`)
  }
}
