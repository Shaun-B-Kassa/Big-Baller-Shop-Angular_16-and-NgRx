import { CommonModule } from '@angular/common';
import { Component, Output, OnInit,EventEmitter } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion'
import { MatListModule} from '@angular/material/list'
@Component({
  selector: 'app-filter',
  templateUrl:'filter.component.html',
  standalone: true,
  imports:[MatExpansionModule, MatListModule, CommonModule],
  styles: [
  ]
})
export class FilterComponent implements OnInit{

  @Output() categoryChange = new EventEmitter<string>();

  categories: string[] = ['Shoes', 'Pants', 'Watches'];

  ngOnInit(): void {
    
  }

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category)
  }

}
