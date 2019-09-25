import { Component, OnInit }           from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { IShoppingItem } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  @Input() products: IShoppingItem[];
  @Input() columnTitles: string[];

  @Output() selectEmitter = new EventEmitter<IShoppingItem>();
  @Output() deleteEmitter = new EventEmitter<IShoppingItem>();

  constructor() { }

  ngOnInit() {
    console.log("CartTableComponent - ngOnInit: ", this.products);
  }

  onSelect(e) {
    this.selectEmitter.emit(e);
  }

  onDelete(e) {
    this.deleteEmitter.emit(e);
  }

  get total(): string {
    if(this.products && this.products.length) {
      return "$" + Math.round(this.products.reduce((acc, product) => acc + product.itemTotal, 0)).toFixed(2);
    }
    else {
      return "$0";
    }
  }
}
