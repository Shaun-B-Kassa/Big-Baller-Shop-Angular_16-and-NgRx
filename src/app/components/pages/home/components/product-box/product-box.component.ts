import { Component, EventEmitter, Input,Output } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { Product } from 'src/app/components/shared/models/product-list.model';

@Component({
  selector: 'app-product-box',
  standalone: true,
  templateUrl:'product-box.component.html',
  imports:[ MatCardModule, CurrencyPipe, MatIconModule, CommonModule],
  styles: [
  ]
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;
  @Input() product = {};
  @Output() add = new EventEmitter<string>()

}
