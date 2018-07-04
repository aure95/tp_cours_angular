import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';



@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {


   public students=[];
   public checkbox_value: boolean=false;






  constructor(private studentService:StudentService) { }

  ngOnInit()
  {
    //console.log(this.studentService.getStudents())

  this.studentService.getStudents().subscribe(res=>{this.students=res;
  //console.log(this.students);});
  console.log(this.students);
  /*
  console.log("1");
  console.log(this.students);
  console.log("2");
  console.log(this.studentService.getStudents());
  console.log("3");
*/
  }
}
  toto()
  {
      this.checkbox_value=!this.checkbox_value;
      console.log(this.checkbox_value);
  }

}
