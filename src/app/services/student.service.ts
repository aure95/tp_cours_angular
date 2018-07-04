import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //private http:HttpClient;
  private urlServer: string ="http://localhost:5000/students";

  public message:string ='message en provenance du service';

  constructor(private http:HttpClient) {

  }

  getStudents(){
/*
    var observable_response;


    //retourne un objet observable la souscription se fera coté composant
    observable_response=this.http.get(this.urlServer+"/students");

    return observable_response;
*/
  return this.http.get(this.urlServer);

  }



}
