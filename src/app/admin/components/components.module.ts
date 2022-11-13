import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CustomerModule,
    ProductModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
