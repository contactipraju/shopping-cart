import { Injectable, Inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';

import { Observable, BehaviorSubject }  from 'rxjs';

import { IShoppingItem, IProduct } from 'src/app/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _cart = new BehaviorSubject<IShoppingItem[]>([]);
  private store: { cart: IShoppingItem[] } = { cart: [] };
  readonly cart = this._cart.asObservable();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) { }

  private getProductsUrl() {
    return this.baseUrl + 'assets/json/products.json';
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.getProductsUrl());
  }

  loadAll() {
    console.log("ShoppingCartService - loadAll: ");
    this._cart.next(Object.assign({}, this.store).cart);
  }

  create(product: IShoppingItem) {
    console.log("ShoppingCartService - create: ", product);

    let found: boolean = false;
    for(let i=0; i<this.store.cart.length; i++) {
      if(this.store.cart[i].selectedProduct.id === product.selectedProduct.id) {
        this.store.cart[i].quantity += product.quantity;
        this.store.cart[i].itemTotal = Math.round(this.store.cart[i].quantity * this.store.cart[i].selectedProduct.price * 100)/100;
        found = true;
        break;
      }
    }

    if(!found) {
      this.store.cart.push(product);
    }

    this._cart.next(Object.assign({}, this.store).cart);
  }

  update(product: IShoppingItem) {
    console.log("ShoppingCartService - update: ", product);

    this.store.cart.forEach((p, i) => {
      if(p.selectedProduct.id === product.selectedProduct.id) {
        this.store.cart[i] = product;
      }
    });

    this._cart.next(Object.assign({}, this.store).cart);
  }

  delete(product: IShoppingItem) {
    console.log("ShoppingCartService - delete: ");

    this.store.cart.forEach((p, i) => {
      if(p.selectedProduct.id === product.selectedProduct.id) {
        this.store.cart.splice(i, 1);
      }
    });

    this._cart.next(Object.assign({}, this.store).cart);
  }
}
