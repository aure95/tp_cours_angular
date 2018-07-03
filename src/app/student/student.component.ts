import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

//injection de dépendance un objet de type hhtpClient est  crée dès l'instancitaion de la classe StudentComponent 
// StudentComponent dispose d'une propriété http lui permettant de faire des requetes ajax

//	private http: HttpClient;


//injection de dépendance raccourci typescript 
  constructor(private httClient) {
  	//this.http=new HttpClient;

   }

  ngOnInit() {
  }

}
