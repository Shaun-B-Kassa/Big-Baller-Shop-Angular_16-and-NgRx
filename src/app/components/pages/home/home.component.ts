import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductHeaderComponent } from "./components/product-header/product-header.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { FilterComponent } from "./components/filter/filter.component";
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { CartComponent } from "../cart/cart.component";

//NgRx Imports
import { Store } from "@ngrx/store";
import { ProductsService } from "../../shared/services/products.service";
import {
  selectCartState,
  selectFiltersState,
  selectProducts,
} from "../../shared/state/products.selectors";
import {
  ProductsActions,
  ProductsApplication,
} from "../../shared/state/products.actions";
import { Product } from "../../shared/models/product.model";
import { Observable, map, pipe } from "rxjs";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 355,
  4: 350,
};

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styles: [],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    ProductHeaderComponent,
    FilterComponent,
    MatGridListModule,
    ProductBoxComponent,
    CartComponent,
  ],
})
export class HomeComponent {
  cols: number = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  selectedCategory: string | undefined;
  products: Product[] = [];
  filters: string[] = [];

  onAdd(productId: number) {
    console.log(productId);
    this.store.dispatch(ProductsActions.addProduct({ productId }));
  }

  onRemove(productId: number) {
    this.store.dispatch(ProductsActions.removeProduct({ productId }));
  }

  constructor(private productService: ProductsService, private store: Store) {
    this.store
      .select(selectFiltersState)
      .subscribe((filters) => (this.filters = [...filters]));
    this.store
      .select(selectProducts)
      .subscribe((products) => (this.products = [...products]));
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.store.dispatch(
        ProductsApplication.retrivedProductList({ products })
      );
    });

    this.productService.getFilters().subscribe((filters) => {
      this.store.dispatch(
        ProductsApplication.retrivedProductFilters({ filters })
      );
    });
  }

  onItemsColumsChange(numColums: number) {
    this.cols = numColums;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(category: string) {
    console.log(category)
    this.products = this.products.filter(items => items.category == category)
  }

  onSortByPrice(sortInput: string): void {
    if (this.products) {
      if (sortInput == "ase") {
        this.products.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sortInput == "desc") {
        this.products.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }
  }
}
