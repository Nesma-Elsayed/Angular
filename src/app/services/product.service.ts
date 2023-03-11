import { HttpClient } from '@angular/common/http';
import { productarray } from './../models/productarray';
import { Iproduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3005/product';
  getallproduct()
  {
    return this.http.get(this.url);
  }

  getproductbyId(productid:number)
  {
    return this.http.get(`${this.url}/${productid}`);
  }

 addproduct(product:any){
   return this.http.post(this.url,product);
 }
 editproduct(productid:number,product:any){
  return this.http.put(`${this.url}/${productid}`,product);
 }
 deleteproduct(productid:number){
  return this.http.delete(`${this.url}/${productid}`);
 }
}
