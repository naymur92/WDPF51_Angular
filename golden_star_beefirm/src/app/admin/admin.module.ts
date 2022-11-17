import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

const admin: Routes = [
  {path: '', component: AdminHomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '**', redirectTo: ''}
]


@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    EmployeesComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(admin)
  ]
})
export class AdminModule {
  constructor(private route: ActivatedRoute) {}
}
