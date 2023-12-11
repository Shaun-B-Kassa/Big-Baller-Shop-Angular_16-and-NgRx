import { CommonModule } from '@angular/common';
import { Component, Output, OnInit,EventEmitter } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion'
import { MatListModule} from '@angular/material/list'
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/components/shared/models/product.model';
import { ProductsService } from 'src/app/components/shared/services/products.service';
import {
  selectCartState,
  selectFiltersState,
  selectProducts,
} from "../../../../shared/state/products.selectors";
@Component({
  selector: 'app-filter',
  templateUrl:'filter.component.html',
  standalone: true,
  imports:[MatExpansionModule, MatListModule, CommonModule],
  styles: [
  ]
})
export class FilterComponent {

  @Output() categoryChange = new EventEmitter<string>();
  filters: Array<string> = [];
  filterdItmes: Product[] = []


  constructor(private productService: ProductsService, private store: Store) {
    this.store
      .select(selectFiltersState)
      .subscribe((filters) => (this.filters = [...filters]));
  }


  onCategoryChange(category: string) {
    this.categoryChange.emit(category)  
  }
}
