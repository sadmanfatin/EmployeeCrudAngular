import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private baseUrl = "http://localhost:8080/employee/all";
  //private baseUrl = "https://api.publicapis.org/entries";
  
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    console.log("================  in   getEmployeeList() =============");
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
   }

 
  // getEmployeeList(): Observable<any>{
  //   return this.httpClient.get<any>(`${this.baseUrl}`); 
  //  }

}
