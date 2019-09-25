/* Add/Edit items to shopping cart */

import { Component, OnInit }       from '@angular/core';
import { Subscription }            from 'rxjs';

import { IProduct, IShoppingItem } from 'src/app/models/shopping-cart';

import { ShoppingCartService }     from 'src/app/services/shopping-cart.service';
import { CommunicationService }    from 'src/app/services/communication.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  item: IShoppingItem;
  products: IProduct[] = [];

  dataLoaded:  boolean = false;
  editingMode: boolean = false;
  subscription: Subscription;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _communicationService: CommunicationService
  ) {
    this.subscription = _communicationService.updateProduct$.subscribe(
      message => {
        if(message.operation === 'update') {
          this.editingMode = true;
          this.item = message.data;
        }
      }
    );
  }

  ngOnInit() {
    this._shoppingCartService.getProducts().subscribe(result => {
      console.log("EditItemComponent - ngOnInit: ", result);

      this.products = result;
      this.dataLoaded = true;
      this.resetItem();
    });
  }

  resetItem() {
    this.item = {
      selectedProduct: this.products[0],
      quantity: 1,
      itemTotal: 0
    };

    this.editingMode = false;

    this.calculateItemTotal();
  }

  onProductSelection() {
    this.item.quantity = 1;
    this.calculateItemTotal();
  }

  calculateItemTotal() {
    console.log("EditItemComponent - calculateItemTotal: ", this.item);

    // Rounding to two decimal places
    this.item.itemTotal = Math.round(this.item.quantity * this.item.selectedProduct.price * 100)/100;
  }

  addItemToCart() {
    console.log("EditItemComponent - addItemToCart: ", this.item);
    this._shoppingCartService.create(Object.assign({}, this.item));
  }

  updateItemInCart() {
    console.log("EditItemComponent - updateItemInCart: ", this.item);
    this._shoppingCartService.update(Object.assign({}, this.item));
    this.resetItem();
  }

  cancelItem() {
    console.log("EditItemComponent - cancelItem: ", this.item);
    this.resetItem();
  }
}
