import { Component, DoCheck, EventEmitter, Input, Output } from "@angular/core";
import { CurrencyPipe , CommonModule} from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { RouterLink } from "@angular/router";

import {ExponentialStrength} from "../shared/pipes/exponential-strength.pipe"
// import { CartItems, Cart } from "../shared/models/cart.model";
import { Observable } from "rxjs";
import { Product } from "../shared/models/product.model";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatBadgeModule, CurrencyPipe, ExponentialStrength, RouterLink, CommonModule],
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent  {

  @Input() cartProductsIds: Array<number> = [];
  @Input() products: Array<Product> = []
  @Output() remove = new EventEmitter<number>();
  cartItems: Product[] = [];

  constructor(){
  }


  
}
