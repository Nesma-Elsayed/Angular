import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any=[];

  constructor(private productservice : ProductService)
  {   
  }

  ngOnInit(): void {
  //  this.productservice.getallproduct().subscribe((response)=>{
  //   this.products=response;
  //  });

   this.productservice.getallproduct().subscribe({
    next:(Response)=>{
      this.products=Response;
    },
    error:(error) => { 
      console.log(error)
    },
   });
  }

  delete(productid:number){
   
    this.productservice.deleteproduct(productid).subscribe({
      next:(Response)=>{
        this.products=this.products.filter(
          (product:any) => product.id !=productid
        );
      },
      error:(error) => { 
        console.log(error)
      },
     });

    }

    }
