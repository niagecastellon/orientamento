import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  token = '1c61a26fefc70cfe00fd14f115dcd9fffe09434c1119e6811f361ee767ca34d235ce90e63884b7a2eb663931cb8f90e65c37f8e34ac9ce13a3653f08c85da8d1a4048168c0697593ed516378fc7685a0a972feb7de278477ca5a6c75baa4f9e87014fecffbdee392ec0f8012b22e0889ffc099b14562f8e44c7aec2f1c3580e2';
  link: string = "https://symmetrical-space-happiness-x65xjrg4xqqf6jwq-1337.app.github.dev/api/"

  searchDataSchools() {
    return this.http.get<any>(this.link + "schools", {headers: new HttpHeaders().set('Authorization','bearer ' + this.token)});
  }

  searchDataShoolbyID(id: number) {
    return this.http.get<any>(this.link + "schools" + '/' + id, {headers: new HttpHeaders().set('Authorization','bearer ' + this.token)});
  }

  searchDataOpenDays() {
    return this.http.get<any>(this.link + "open-days", {headers: new HttpHeaders().set('Authorization','bearer ' + this.token)});
  }

  searchDataOpenDaysbyID(id: number) {
    return this.http.get<any>(this.link + "open-days" + '/' + id, {headers: new HttpHeaders().set('Authorization','bearer ' + this.token)});
  }

}
