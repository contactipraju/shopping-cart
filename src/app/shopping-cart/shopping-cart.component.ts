/* List/Delete items to shopping cart */

import { Component, OnInit } from '@angular/core';

import { IShoppingItem, IProduct } from 'src/app/models/shopping-cart';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Observable } from 'rxjs';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productsInCart$: Observable<IShoppingItem[]>;

  columnTitles: string[] = ["Name", "Quantity", "Price"];

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _communicationServiceService: CommunicationServiceService) { }

  ngOnInit() {
    this.productsInCart$ = this._shoppingCartService.cart;
    this._shoppingCartService.loadAll();
  }

  onSelectProduct($event) {
    console.log("ShoppingCartComponent - onProduct: ", $event);
    this._communicationServiceService.broadcastMessage({ operation: 'update', data: Object.assign({}, $event)});
  }

  onDeleteProduct($event) {
    console.log("ShoppingCartComponent - onDeleteProduct: ", $event);
    this._shoppingCartService.delete($event);
  }
}
