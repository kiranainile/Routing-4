import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  products :Array<Iproduct>=[]             //products ka Array

  constructor(private _productService :ProductService

  ) { }

  ngOnInit(): void {
    this._productService.fetchProducts()
    .subscribe({
      next:data=>{
        this.products=data
      },
      error:err =>{
        console.log(err);
      }
    })
  }

}
