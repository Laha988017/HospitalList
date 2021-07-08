import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedDetailsComponent } from './components/bed-details/bed-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';

const routes: Routes = [
  {path:"hospitaldetails", component: HospitalListComponent},
  {path:"contacts", component: ContactsComponent},
  {path:"bedDetails", component: BedDetailsComponent},
  {path:"doctors",component:DoctorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
