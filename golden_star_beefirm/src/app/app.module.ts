import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { AdminComponent } from './admin/admin.component';
import { MainTopbarComponent } from './main-topbar/main-topbar.component';
import { MainSliderComponent } from './home/main-slider/main-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessComponent,
    MainNavbarComponent,
    MainFooterComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    EmployeesComponent,
    AdminComponent,
    MainTopbarComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
