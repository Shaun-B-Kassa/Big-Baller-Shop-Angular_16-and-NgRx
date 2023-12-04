import { Injectable } from "@angular/core";

import { of, Observable,map } from 'rxjs'
import { Product } from "../models/product-list.model";
import { apiData } from "../models/api-data";

@Injectable({ providedIn: 'root'})

export class ProductsService {

    private apiProducts: Product[] = [];

    constructor(){
        this.apiProducts = apiData
    }

    getProducts(): Observable<Product[]> {
        let products: Observable<Product[]> = of(this.apiProducts)
        return products
    }
}