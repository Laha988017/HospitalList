import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalListService {

url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
  
  constructor(private http:HttpClient) { }

  getHospitalList(): Observable<any>{
    return this.http.get<any>(this.url);
  }
  getContacts(): Observable<any>{
    return this.http.get<any>("https://api.rootnet.in/covid19-in/contacts");
  }
  getBeds(): Observable<any>{
    return this.http.get<any>("https://api.rootnet.in/covid19-in/hospitals/beds");
  }
}
