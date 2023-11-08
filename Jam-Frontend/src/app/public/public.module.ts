import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';
import { PLayoutComponent } from './p-layout/p-layout.component';
import { PHeaderComponent } from './p-header/p-header.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    PHeaderComponent,
    PLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgxSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicModule { }
