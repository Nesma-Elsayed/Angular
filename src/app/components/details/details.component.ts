import { ProductService } from './../../services/product.service';
import { Iproduct } from './../../models/iproduct';
import { ProductComponent } from './../product/product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productid:number=0;
  product:any;
  constructor(
    private activatedroute : ActivatedRoute ,
    private productservice : ProductService,
    private router : Router
    ){
   this.productid=Number(this.activatedroute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
  
    if(this.productid){
      
      this.productservice.getproductbyId(this.productid).subscribe(
        (response)=>{
          this.product=response;
        });
    }
    else
    {
      this.router.navigate(['/product']);
    }
  }
}
