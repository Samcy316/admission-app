import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }
  addEmployee(data: any): Observable<any>{
   return this._http.post('  http://localhost:3000/employees', data);
  }
  getEmployeeList(): Observable<any>{
    return this._http.get('  http://localhost:3000/employees');
   }
}
