import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentManagmentFE';
  public students: Student[] | undefined;
  constructor(private studentService: StudentService){}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents():void{
    this.studentService.getStudents().subscribe(
      (restponse: Student[]) => {
        this.students = restponse;
      },
      (error:HttpErrorResponse)=>
      alert(error.message));
  }
}
