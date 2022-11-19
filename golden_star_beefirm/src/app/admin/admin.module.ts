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


@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    EmployeesComponent,
    AdminNavbarComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ]
})
export class AdminModule {}