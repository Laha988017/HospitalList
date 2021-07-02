import { Component, OnInit } from '@angular/core';
import { HospitalListService } from 'src/app/service/hospital-list.service';
import { HospitalListComponent } from '../hospital-list/hospital-list.component';

@Component({
  selector: 'app-bed-details',
  templateUrl: './bed-details.component.html',
  styleUrls: ['./bed-details.component.css']
})
export class BedDetailsComponent implements OnInit {
  dataset: any;
  query:any;
  constructor(private service:HospitalListService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getBeds().subscribe(
      res=>{
        this.dataset = res.data.regional
        console.log(res);
      }
    )
  }

}
