import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    
   // this.getEmployees();
    this.employees = [{"id":1,"name":"Sadman","phone":1913380601,"email":"sadmanfatin91@gmail.com"},{"id":2,"name":"fatin","phone":1913380602,"email":"sadmanfatin91@gmail.com"},{"id":3,"name":"fatina","phone":1913380603,"email":"sadmanfatin91@gmail.com"},{"id":4,"name":"AAAAA","phone":19133555555,"email":"sadmanfatin208@gmail.com"}]
  }

  private getEmployees(){
 
    console.log("================== in getEmployees() =============== ");
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
     // console.log(data);
    });
  }

  // private getEmployees(){
 
  //   console.log("================== in getEmployees() =============== ");
  //   this.employeeService.getEmployeeList().subscribe(
  //   (response: Employee[]) => {
  //     this.employees = response;
  //    // console.log(data);
  //   });
  // }
  
}
