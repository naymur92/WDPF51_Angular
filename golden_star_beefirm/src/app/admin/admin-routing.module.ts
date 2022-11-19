import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './employees/employees.component';

const childRoute: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'dashboard', redirectTo: '' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/employee-add', component: EmployeesComponent },
  { path: 'employees/employee-edit/:id', component: EmployeesComponent },
];

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: childRoute },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
