import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ALayoutComponent } from './a-layout/a-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ALayoutComponent,
    DashboardComponent,
    SideMenuComponent,
    AHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
