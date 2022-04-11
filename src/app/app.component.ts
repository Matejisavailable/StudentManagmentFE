import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler/src/util";
import {NgForm} from "@angular/forms";

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
  public onOpenModal( mode: string,student?: Student):void{
    const container = document.getElementById('main')
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.style.display = 'none';
    btn.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      btn.setAttribute('data-target','#addStudentModal');
    }
    if(mode === 'change'){
      btn.setAttribute('data-target','#changeStudentModal');
    }
    if(mode === 'delete'){
      btn.setAttribute('data-target','#deleteStudentModal');
    }

    // @ts-ignore
    container.appendChild(btn);
    btn.click();
  }

  public onAddStudent(addForm: NgForm):void {

  }
}
