import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router) { }
    private baseUrl = environment.url + "/book";
    private baseUrl2 = environment.url2 + "/bulus";
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })}
  
  
  getAllBooks(): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/gab", this.httpOptions)
      .pipe(catchError(this.handleError));
  } 

  
  getAllBulus(): Observable<any> {
    return this.http
      .post<any>(this.baseUrl2 + "/gab", this.httpOptions)
      .pipe(catchError(this.handleError));
  } 

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      swal({
        title: 'BULUS HANDLE ERROR',
        text: 'error mesej : '+ error.error.message,
        type: 'success'
      }).catch(swal.noop);
    }
    return throwError("Something bad happened; please try again later.");
  }
}
