import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface Image
{
	thumbnailUrl:string;
	alt:string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

//injection de dépendance un objet de type hhtpClient est  crée dès l'instancitaion de la classe StudentComponent 
// StudentComponent dispose d'une propriété http lui permettant de faire des requetes ajax

	//private http: HttpClient;
	public images;


//injection de dépendance raccourci typescript 
  constructor(private http:HttpClient) {

  	

   }

  ngOnInit() {
  }


  testAjax(){
    

    console.log("coucou");
    //console.log("toto")
  	this.http.get('https://jsonplaceholder.typicode.com/photos')
  	.subscribe(res=>{this.images=res});

  }


}

