import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';

const childRoute: Routes = [
  { path: 'dashboard', component: AdminHomeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/employee-add', component: EmployeesComponent },
  { path: 'employees/employee-edit/:id', component: EmployeesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/product-add', component: ProductsComponent },
  { path: 'products/product-edit/:id', component: ProductsComponent },
  { path: 'bookings', component: BookingsComponent },
];

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: childRoute },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
