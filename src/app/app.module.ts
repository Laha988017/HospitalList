import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BedDetailsComponent } from './components/bed-details/bed-details.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalListComponent,
    SearchFilterPipe,
    ContactsComponent,
    BedDetailsComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
