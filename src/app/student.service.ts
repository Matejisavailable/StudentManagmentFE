import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_URL = environment.URL;
  constructor(private http: HttpClient) { }
  public getStudents(): Observable<Student[]> {
    return this.http.get<any>(`${this.API_URL}/student/everyone`);
  }
  public addStudents(student:Student): Observable<Student> {
    return this.http.post<any>(`${this.API_URL}/student/add`,student);
  }
  public changeStudents(student:Student): Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}/student/change`,student);
  }
  public deleteStudents(studentId:number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/student/delete/${studentId}`);
  }
}
