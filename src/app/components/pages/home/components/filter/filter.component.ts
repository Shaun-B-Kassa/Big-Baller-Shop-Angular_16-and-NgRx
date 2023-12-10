import { CommonModule } from '@angular/common';
import { Component, Output, OnInit,EventEmitter } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion'
import { MatListModule} from '@angular/material/list'
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/components/shared/models/product-list.model';
import { ProductsService } from 'src/app/components/shared/services/products.service';
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
  categories: Array<string> = [];
  filterdItmes: Product[] = []


  constructor(private productService: ProductsService) {
      this.productService.getFilters().subscribe(filters => {
        this.categories = filters
      })
  }


  onCategoryChange(category: string) {
    console.log('Calling')
    
    this.productService.getProducts(category)
  }
}
