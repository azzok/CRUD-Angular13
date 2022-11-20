import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient,) { }

  public list(){
    return new Promise((resolve,reject)=>{
      this.http.get(`${environment.apiUrl}/products/list`).subscribe((res:any)=>{
        resolve(res);
      },(err)=>{
        reject(err);
      })
    })
  }

  public add(data:any){
    const body = {
      'first_name':data.first_name,
      'last_name':data.last_name,
      'email':data.email,
    }
    return new Promise((resolve,reject)=>{
      this.http.post(`${environment.apiUrl}/products/add`,body).subscribe((res:any)=>{
        resolve(res);
      },(err)=>{
        reject(err);
      })
    })
  }

}
