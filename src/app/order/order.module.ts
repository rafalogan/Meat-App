import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {OrderComponent} from './order.component';
import {OrderItensComponent} from './order-itens/order-itens.component';
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';

import {SharedModule} from '../shared/shared.module';

import {LeaveOrderGuard} from './leave-order.guard';

const ROUTES: Routes = [
  {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    OrderComponent,
    OrderItensComponent,
    DeliveryCostsComponent
  ]
})
export class OrderModule {}
