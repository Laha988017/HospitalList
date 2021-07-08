import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  query:any;
  doctors:any = [
    {
      "doctorName":"Dr. Tarun Saha",
      "doctorRegistrationNo":"456321",
      "phoneNo":"+91 9654785212",
      "degree":"MBBS MD",
      "category":"COVID19 consultant",
      "timings":"11AM to 7PM",
      "place":"Gariahat"
    },
    {
      "doctorName":"Dr. Debi Shetty",
      "doctorRegistrationNo":"512365",
      "phoneNo":"+91 9654412212",
      "degree":"MBBS MD",
      "category":"COVID19 consultant",
      "timings":"11AM to 7PM",
      "place":"Panihati"
    },
    {
      "doctorName":"Dr. Ashok Kumar",
      "doctorRegistrationNo":"413421",
      "phoneNo":"+91 9654487904", 
      "degree":"MBBS  FRCS", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 6PM", 
      "place":"Ashoknagar"
    },
    {
      "doctorName":"Dr. Mukund Agasty", 
      "doctorRegistrationNo":"413737", 
      "phoneNo":"+91 7685487904", 
      "degree":"MBBS", 
      "category":"COVID19 consultant", 
      "timings":"11AM to 4PM",
      "place":"Asansol"
    },
    {
      "doctorName":"Dr. Maya Biswas", 
      "doctorRegistrationNo":"982421", 
      "phoneNo":"+91 9890392284", 
      "degree":"MBBS MD", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 6PM",
      "place":"Barrackpore"
    },
    {
      "doctorName":"Dr. Ganesh Samuel", 
      "doctorRegistrationNo":"313421", 
      "phoneNo":"+91 7004487904", 
      "degree":"MBBS", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 6PM",
      "place":"Durgapur"
    },
    {
      "doctorName":"Dr. Souvik Chatterjee", 
      "doctorRegistrationNo":"918967", 
      "phoneNo":"+91 7837465809", 
      "degree":"MBBS MD", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 6PM",
      "place":"Barasat"
    },
    {
      "doctorName":"Dr. Subhajit Fernandes", 
      "doctorRegistrationNo":"973209", 
      "phoneNo":"+91 9734512657", 
      "degree":"MBBS", 
      "category":"COVID19 consultant", 
      "timings":"11AM to 5PM",
      "place":"Patna"
    },
    {
      "doctorName":"Dr. Sreyashi Dutta", 
      "doctorRegistrationNo":"910347", 
      "phoneNo":"+91 9019294330", 
      "degree":"MBBS MD", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 4PM",
      "place":"Nagpur"
    },
    {
      "doctorName":"Dr. Subham Ray", 
      "doctorRegistrationNo":"812345", 
      "phoneNo":"+91 6291245698", 
      "degree":"MBBS", 
      "category":"COVID19 consultant", 
      "timings":"10AM to 6PM",
      "place":"Beleghata"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
