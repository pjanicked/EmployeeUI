import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Employee } from '../models/employee';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = "https://localhost:7045/api";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any>  {
    return this.httpClient.get(this.apiURL + '/Employee/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(employee:Employee): Observable<any> {
    return this.httpClient.post(this.apiURL + '/Employee', employee, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Employee/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, employee:Employee): Observable<any> {
    return this.httpClient.put(this.apiURL + '/Employee/' + id, employee, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Employee/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
