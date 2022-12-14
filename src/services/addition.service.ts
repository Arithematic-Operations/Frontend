import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  constructor(private http:HttpClient) { }

  public getAddition(no1:any,no2:any){
    return this.http.get(`http://localhost:9094/operation/add/${no1}/${no2}`)
  }
}
