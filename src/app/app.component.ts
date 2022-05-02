import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler/src/util";
import {NgForm} from "@angular/forms";
import {Odbor} from "./odbor";
import {Fakulta} from "./fakulta";
import {Katedra} from "./katedra";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentManagmentFE';
  public students: Student[] = [];
  public odbory: Odbor[] = [];
  public fakulty: Fakulta[] = [];
  public katedry: Katedra[] = [];
  public updateStudent: Student | undefined;
  public deleteStudent: Student | undefined;
  constructor(private studentService: StudentService){
  }

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

  public getOdbory():void{
    this.odboryService.getOdbory().subscribe(
      (restponse: Odbor[]) => {
        this.odbory = restponse;
      },
      (error:HttpErrorResponse)=>
        alert(error.message));
  }

  public getKatedry():void{
    this.katedraService.getKatedry().subscribe(
      (restponse: Katedra[]) => {
        this.katedry = restponse;
      },
      (error:HttpErrorResponse)=>
        alert(error.message));
  }

  public getFakulty():void{
    this.fakultaService.getFakulty().subscribe(
      (restponse: Fakulta[]) => {
        this.fakulty = restponse;
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
      this.updateStudent = student;
      btn.setAttribute('data-target','#changeStudentModal');
    }
    if(mode === 'delete'){
      this.deleteStudent = student;
      btn.setAttribute('data-target','#deleteStudentModal');
    }

    // @ts-ignore
    container.appendChild(btn);
    btn.click();
  }

  public onAddStudent(addForm: NgForm):void {

    // @ts-ignore
    document.getElementById('add-student-form').click();
  this.studentService.addStudents(addForm.value).subscribe(
    (response: Student)=>{
      console.log(response);
      this.getStudents();
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  );
  }

  public onUpdateStudent(student: Student):void {
    this.studentService.changeStudents(student).subscribe(
      (response: Student)=>{
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onDeleteStudent(studentId: number):void {
    this.studentService.deleteStudents(studentId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public search(search: string):void{
    const res: Student[] = [];
    for(const student of this.students){
        if(student.meno.toLowerCase().indexOf(search.toLowerCase())!==-1 || student.priezvisko.toLowerCase().indexOf(search.toLowerCase())!==-1){
          res.push(student);
        }
    }
    this.students = res;
    if(res.length === 0 || !res){
      this.getStudents();
    }
  }
}
