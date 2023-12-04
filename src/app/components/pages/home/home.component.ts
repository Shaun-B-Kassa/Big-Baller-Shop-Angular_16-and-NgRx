import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductHeaderComponent } from './components/product-header/product-header.component';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule} from '@angular/material/grid-list'
import { FilterComponent } from "./components/filter/filter.component";
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { CartComponent } from '../cart/cart.component';

//NgRx Imports
import { Store } from '@ngrx/store';
import { ProductsService } from '../../shared/services/products.service';
import { selectCartState, selectProducts } from '../../shared/state/products.selectors';
import { ProductsActions, ProductsApplication } from '../../shared/state/products.actions';

const ROWS_HEIGHT:{[id:number]: number} = {
  1: 400,
  3: 355,
  4: 350
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styles: [],
    imports: [MatSidenavModule,CommonModule, MatButtonModule, ProductHeaderComponent, FilterComponent, MatGridListModule, ProductBoxComponent, CartComponent]
})
export class HomeComponent implements OnInit {
 cols: number = 3;
 rowHeight: number = ROWS_HEIGHT[this.cols];
 selectedCategory: string | undefined;

  products$ = this.store.select(selectProducts)
  cartProducts$ = this.store.select(selectCartState)

  onAdd(productId: string) {
    console.log(productId)
    this.store.dispatch(ProductsActions.addProduct({ productId }))
  }

  onRemove(productId: string) {
    this.store.dispatch(ProductsActions.removeProduct({ productId }))
  }

  constructor(private productService: ProductsService, private store: Store){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.store.dispatch(ProductsApplication.retrivedProductList({ products }))
    })
  }

 
  onItemsColumsChange(numColums: number) {
    this.cols = numColums;
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(category: string) {
    this.selectedCategory = category;
  }
}
