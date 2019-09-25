import { Observable } from 'rxjs';

import { IShoppingItem, IProduct } from 'src/app/models/shopping-item';

import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });

  it('should fetch all products', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    service.getProducts().subscribe(result => {
      expect(result).toBeTruthy();
    });
  });

  it('should add a product to the cart', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    let productsInCart$: Observable<IShoppingItem[]> = this.service.cart;
    this.service.create(Object.assign({}, {
      selectedProduct: this.products[0],
      quantity: 1,
      itemTotal: 0
    }));
    expect(productsInCart$).toBeTruthy();
  });

  it('should update a product in the cart', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });

  it('should delete a product from the cart', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });
});
