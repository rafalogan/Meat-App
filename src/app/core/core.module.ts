import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {OrderService} from '../order/order.service';
import {NotificationService} from '../shared/messages/notification.service';
import {LoginService} from '../security/login/login.service';
import {LoggedinGuard} from '../security/loggedin.guard';
import {LeaveOrderGuard} from '../order/leave-order.guard';
import {AuthInterceptor} from '../security/auth.interceptor';


@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService,
    NotificationService,
    LoginService,
    LoggedinGuard,
    LeaveOrderGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
