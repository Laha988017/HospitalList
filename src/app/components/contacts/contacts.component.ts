import { Component, OnInit } from '@angular/core';
import { HospitalListService } from 'src/app/service/hospital-list.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  dataset: any;
  query:any;
  constructor(private service:HospitalListService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getContacts().subscribe(
      res=>{
        this.dataset = res.data.contacts.regional
        console.log(res);
      }
    )
  }
}
