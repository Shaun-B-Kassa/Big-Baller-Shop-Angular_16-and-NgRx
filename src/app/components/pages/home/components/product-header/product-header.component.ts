import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports:[ MatCardModule, MatIconModule, MatMenuModule, MatButtonModule ],
  templateUrl:'./product-header.component.html',
  styles: [
  ]
})
export class ProductHeaderComponent implements OnInit {

  @Output() numberOfColumsChanged = new EventEmitter<number>();
  @Output() sortProductsChanged = new EventEmitter<string>();
  numberOfColums: number = 3;

  ngOnInit() {
  }
  
  sort: string = 'Price';
  showItems: number = 4;

  onSortUpdate(updateSort: string):void {
    this.sortProductsChanged.emit(updateSort)
  }
  onItemsUpdate(numberOfItems: number):void {

  }

  onColumsUpdated(numColums: number) {
    this.numberOfColums = numColums;
    this.numberOfColumsChanged.emit(numColums)
  }
}
