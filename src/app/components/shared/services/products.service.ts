import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable, Subject, catchError, distinct, filter, from, map, reduce, tap } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({ providedIn: "root" })
export class ProductsService {
  private productUrl: string = environment.apiUrl;
  filterCategories$ = new Observable<string[]>();

  constructor(private http: HttpClient) {}

  getProducts(filter?: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.productUrl}/products`)
      .pipe(map((products) => products || []));
  }

  getFilters(): Observable<string[]> {
    return this.http.get<Product[]>(`${this.productUrl}/products`).pipe(
      map(products => {
       return  products.map(item => item.category)
      }),
      map(filters => [...new Set(filters)])
    )
  }
}
