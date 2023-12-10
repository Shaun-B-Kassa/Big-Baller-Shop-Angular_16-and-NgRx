import { Component, EventEmitter, Input, Output, inject} from "@angular/core";
import { BehaviorSubject,Subject, of, map, filter, from, Observable } from 'rxjs'
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { Cart, } from "../../shared/models/cart.model";
import { RouterLink } from "@angular/router";
import { Product } from "../../shared/models/product-list.model";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./cart.component.html",
  styles: [],
})

export class CartComponent {

  @Input() cartProductsIds: ReadonlyArray<string> = [];
  @Input() products: ReadonlyArray<Product> = []
  @Output() remove = new EventEmitter<string>();
  cartItems: Product[] = [];

  constructor(){
  }


  displayedColumns = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ]



  

}
