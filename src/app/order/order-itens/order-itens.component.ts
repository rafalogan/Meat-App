import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();


  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQauntity(item: CartItem) {
    this.increaseQuantity.emit(item);

  }

  emitDecreaseQauntity(item: CartItem) {
    this.decreaseQuantity.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
