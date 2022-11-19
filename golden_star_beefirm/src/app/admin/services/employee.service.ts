import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  PHP_API_SERVER = 'http://localhost/wdpf51_Angular/golden_star_beefirm/api';

  constructor(private httpClient: HttpClient) {}

  readEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      `${this.PHP_API_SERVER}/employees.php`
    );
  }

  readEmployee(id: any): Observable<Employee> {
    return this.httpClient
      .post<Employee>(`${this.PHP_API_SERVER}/getEmployee.php`, { id })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public employeeRegistration(name: any, email: any, emp_type: any, pwd: any) {
    return this.httpClient
      .post<any>(this.PHP_API_SERVER + '/employee_register.php', {
        name,
        email,
        emp_type,
        pwd,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}