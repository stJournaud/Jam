import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSliderModule} from "ngx-slider-v2";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './_utils/error/error.component';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TokenInterceptorProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
