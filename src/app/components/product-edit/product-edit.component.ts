import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
productid:number=0;
product:any;
constructor(
  private activeroute:ActivatedRoute ,
   private productservice:ProductService,
   private routre: Router 
   )
   {
  // this.productid=Number(this.activeroute.snapshot.paramMap.get('id'))
  // console.log(this.productid);
  this.activeroute.paramMap.subscribe(
    (params)=>{
      this.productid =Number(params.get('id')) 
      this.productForm.controls['productname'].setValue('');
      this.productForm.controls['price'].setValue('');
      this.productForm.controls['quantity'].setValue('');
      this.productForm.controls['imgurl'].setValue('');
    }
  )
      
}
  ngOnInit(): void {

  this.productservice.getproductbyId(this.productid).subscribe({
    next : (response) =>
    {
      this.product = response;
      this.productForm.controls['productname'].setValue(
        this.product.productname
      );
      this.productForm.controls['price'].setValue(
        this.product.price
      );
      this.productForm.controls['quantity'].setValue(
        this.product.quantity
      );
      this.productForm.controls['imgurl'].setValue(
        this.product.imgurl
      );
    }
  });
  }
 productForm =new FormGroup({
  productname : new FormControl('',[ 
  Validators.required,
  Validators.minLength(3),
  ]),

  price : new FormControl(''),
  quantity :new FormControl(''),
  imgurl :new FormControl(''),
 })

 get getname(){
  return this.productForm.controls['productname'];
 }
 get getprice(){
  return this.productForm.controls['price'];
 }
 get getquantity(){
  return this.productForm.controls['quantity'];
 }

 submitform(e:any){
  e.PrevenDefault;
  console.log(this.productForm.status)
  if(this.productForm.status == 'VALID')
  {
    if(this.productid ==0)
    {
      this.productservice.addproduct(this.productForm.value).subscribe({
        next:(response)=>{
          this.routre.navigate(['/product'])
  
        }
      })  
    }
    else{
      this.productservice.editproduct(this.productid,this.productForm.value).subscribe({
        next:(response)=>{
          this.routre.navigate(['/product'])
  
        }
      })
    }
   
  }
 }

}
