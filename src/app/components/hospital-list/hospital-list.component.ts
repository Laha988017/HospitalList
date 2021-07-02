import { Component, OnInit } from '@angular/core';
import { HospitalListService } from 'src/app/service/hospital-list.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  dataset: any;
  query:any;


  constructor(private service:HospitalListService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getHospitalList().subscribe(
      res=>{
        this.dataset = res.data.medicalColleges
        console.log(res);
      }
    )
  }
}


