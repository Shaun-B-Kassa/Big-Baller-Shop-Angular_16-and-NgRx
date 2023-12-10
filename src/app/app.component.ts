import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';

//Imported Compoents
import { HeaderComponent } from './components/header/header.component'


//NgRx Imports
import { Store } from '@ngrx/store';
import { ProductsService } from './components/shared/services/products.service';
import { selectCartState, selectProducts } from './components/shared/state/products.selectors';
import { ProductsActions, ProductsApplication } from './components/shared/state/products.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, CommonModule,HeaderComponent],
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'Big Baller Store';

  products$ = this.store.select(selectProducts)
  cartProducts$ = this.store.select(selectCartState)

  onAdd(productId: number) {
    this.store.dispatch(ProductsActions.addProduct({ productId }))
  }

  onRemove(productId: number) {
    this.store.dispatch(ProductsActions.removeProduct({ productId }))
  }

  constructor(private productService: ProductsService, private store: Store){}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((products) => {
    //   this.store.dispatch(ProductsApplication.retrivedProductList({ products }))
    // })
  }


}
