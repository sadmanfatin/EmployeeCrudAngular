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

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    
    this.getEmployees();
    
  //  this.employees = [{"id":1,"name":"Sadman","phone":1913380601,"email":"sadmanfatin91@gmail.com"}]
  }

  private getEmployees(){
 
    console.log("================== in getEmployees() =============== ");
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
     // console.log(data);
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id])
  }

  
  
}
