import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PriceListComponent } from './price-list/price-list.component';
import { RepairComponent } from './repair/repair.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'repair', component: RepairComponent},
  {path: 'pricelist', component: PriceListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'test', component: TestComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
