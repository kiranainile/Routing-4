import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!:FormGroup
  productID!:string
  isInEditMode:boolean= false
  productObj!:Iproduct
  disableUpdateBtn:boolean=false

  constructor( 
    private _productService :ProductService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _snackbar: SnackbarService
  )
   { }

  ngOnInit(): void {
   
    this.createProductForm()
    this.patchProductForm()
     this._route.queryParams
    .subscribe(res=>{
      if(res['cr']==0){
        this.productForm.disable()
        this.disableUpdateBtn=true
      }else{
        this.productForm.enable()
        this.disableUpdateBtn=false
      }

    })
    

    }


patchProductForm(){

this.productID=this._route.snapshot.paramMap.get('productId')!
    if(this.productID){
      this.isInEditMode=true
      this._productService.fetchProductById(this.productID)
      .subscribe({
        next:res=>{
        
          this.productForm.patchValue(res)
        }
      })
    
    
    }


}
    createProductForm(){
      this.productForm=new FormGroup({
        pname:new FormControl(null,[Validators.required]),
        pstatus:new FormControl('In-progress'),
        canReturn:new FormControl(1)
      })
    }
    onProductAdd(){
      if(this.productForm.invalid){
        this.productForm.markAllAsTouched()
        return

      }else{
         
    let productObj:Iproduct = {...this.productForm.value,pid: Date.now().toString()}

  console.log(productObj);

  this._productService.createProduct(productObj).subscribe({
    next: (res) => {
      console.log(res);
      this.productForm.reset();
      this._router.navigate(['product']);
      this._snackbar.openSnackBar(res.msg);    },
    error: (err) => {
      console.log(err);
    
    }
  
  });
}
      }


onUpdate(){
  if(this.productForm.invalid){
   this.productForm.markAllAsTouched()
  }else{
    let UPDATED_OBJ :Iproduct={...this.productForm.value,pid:this.productID}
    this._productService.updateProduct(UPDATED_OBJ)
    .subscribe({
      next:res=>{
        console.log(res);
          this.productForm.reset()
      this._router.navigate(['product'])
      this.isInEditMode =false;
       this._snackbar.openSnackBar(res.msg);    

     },
     error:err=>{
      console.log(err);
    
     }

    })
  }
  
}


    }
    


  
