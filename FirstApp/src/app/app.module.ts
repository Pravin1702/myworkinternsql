import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';
import { DoctorService } from 'src/Service/Doctor.Service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DoctorsComponent,
    AppointmentsComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
