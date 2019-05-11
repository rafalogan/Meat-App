import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item';
import {Order} from './order';
import {MEAT_API} from '../app.api';
import {LoginService} from '../security/login/login.service';



@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient,
    private loginService: LoginService) { }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  remove(item) {
    this.cartService.removeItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    return  this.http.post<Order>(`${MEAT_API}/orders`, order)
      .pipe(map(res => res.id));
  }

  clear() {
    this.cartService.clear();
  }
}
