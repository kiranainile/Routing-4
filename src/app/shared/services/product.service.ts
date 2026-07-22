import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Iproduct, Ires } from "../models/product";




@Injectable({
    providedIn:'root'
})

export class ProductService{

   productsArr: Array<Iproduct> = [
  {
    pid: '123',
    pname: 'Samsung Galaxy M31',
    pstatus: 'In-progress',
    canReturn: 1,
    price: 18999,
    category: 'Mobile',
    description: '6GB RAM | 128GB Storage',
    image: 'https://m.media-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg'
  },
  {
    pid: '124',
    pname: 'iPhone 15',
    pstatus: 'Dispatched',
    canReturn: 1,
    price: 79999,
    category: 'Mobile',
    description: '128GB | Dynamic Island',
    image:'https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg'
  },
  {
    pid: '125',
    pname: 'Samsung Smart TV',
    pstatus: 'Delivered',
    canReturn: 1,
    price: 45999,
    category: 'Electronics',
    description: '43-inch 4K UHD Smart TV',
    image: "https://tse3.mm.bing.net/th/id/OIP.0TnZJ55l6pybx38bG6T_XQHaFj?r=0&pid=Api&P=0&h=180",
  },
  {
    pid: '126',
    pname: 'HP Pavilion Laptop',
    pstatus: 'In-progress',
    canReturn: 1,
    price: 55999,
    category: 'Laptop',
    description: 'Intel Core i5 | 16GB RAM | 512GB SSD',
    image:'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg'
  }
];


    constructor(){}
    
    fetchProducts():Observable<Iproduct[]>{
        return of( this.productsArr)                   // api mock kiya
    }


    fetchProductById(id:string):Observable <Iproduct>{
        let productobj =this.productsArr.find(p=> p.pid ===id)!
        return of(productobj)
    }
    createProduct(product:Iproduct):Observable<Ires<Iproduct>>{
        this.productsArr.push(product)
          console.log(this.productsArr);
        return of({
            msg:`The new product with id ${product.pid}}is created successfully`,
            data:product
        })

    }
    updateProduct(product:Iproduct):Observable<Ires<Iproduct>>{
        let getIndex=this.productsArr.findIndex(p => p.pid===product.pid)
        // let success=Math.random() >.5 ?true:false
        this.productsArr[getIndex]=product
        return of({
              msg:`The new product with id ${product.pid}}is updated successfully`,
            data:product

        })



    }
    
        removeProductid(id:string):Observable<Ires<Iproduct>>{
            let getIndex=this.productsArr.findIndex(p=>p.pid ===id)
            let product=this.productsArr.splice(getIndex,1)
            return of({
                   msg:`The new product with id ${product[0].pid} is removed successfully....!!!`,
           
                   data:product[0]

            })

        }
            
    
}