import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BookingsComponent } from './bookings/bookings.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    EmployeesComponent,
    AdminNavbarComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductListComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ]
})
export class AdminModule {}
