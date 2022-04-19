import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private baseUrl = "http://localhost:8080/employee";
  //private baseUrl = "https://api.publicapis.org/entries";
  
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    console.log("================  in   getEmployeeList() =============");
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/all`);
   }

 
  // getEmployeeList(): Observable<any>{
  //   return this.httpClient.get<any>(`${this.baseUrl}`); 
  //  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/find/${id}`);
  }

 updateEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update`, employee);
    
  }

  deleteEmployee(id: number): Observable<Object>{
    console.log("=======in emp service delete employee =============");
    console.log (id);
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
     console.log(`${this.baseUrl}/delete/${id}`);
     
  }

}
