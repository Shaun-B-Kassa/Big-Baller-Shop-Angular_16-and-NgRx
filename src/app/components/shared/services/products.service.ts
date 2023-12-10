import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, filter, from, map, tap } from 'rxjs'
import { Product } from "../models/product-list.model";

@Injectable({ providedIn: 'root'})

export class ProductsService {

    private Url: string ="https://fakestoreapi.com"
    filterCategories$ = new Observable<string[]>();
    products$: Observable<Array<Product>>;

    constructor(private http: HttpClient){
       this.products$ = this.http.get<Product[]>(this.Url.concat('/products'))
    }

    getProducts(filter?: string): Observable<Product[]> {
      if(filter){
        this.products$.pipe(
          map(products => 
             products.filter(item => item.category == filter)
          )
        )
      }

      console.log('HEre')
      return this.products$
    }

    getFilters(): Observable<string[]>{
     this.filterCategories$ =  this.products$.pipe(
        map( products => {
          return products.map(item => {
              return item.category
          })
        }),
        map(val => {
            return [...new Set(val)]
        })
     )
        return this.filterCategories$
    }
}