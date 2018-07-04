import { Component, OnInit, Input} from '@angular/core';
//import d'operateur propre a la version 6
import {HttpClient} from '@angular/common/http';
import {take,filter,map,tap,mergeMap} from 'rxjs/operators';

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
	public images=[];

	@Input('data') student=null;
	@Input('checkbox_value') checkbox_value=null;

//injection de dépendance raccourci typescript
  constructor(private http:HttpClient) {



   }

  ngOnInit() {
  }


	


	changeNote()
	{
		console.log("oj");
	}


  testAjax(e){



    console.log(e);
    //console.log("toto")
  	this.http.get("https://jsonplaceholder.typicode.com/photos")
    .pipe(
      //mergeMap sert a transformer le tableau d'objet en element
     mergeMap(data=>data),
     //take sert a prendre les 3 premiers données
   // take(3)

    filter(el=>el.id<20),
    // map modifie les données entrées
    map(el=>{
      return {id: el.id,url:el.thumbnailUrl}
    }),

    //  map(res=>res.id+1),
     /*filter(res => {return res;})*/
     tap(res=>{

      // console.log(res);
     })
      )
  	.subscribe(res=>{
      this.images.push(res);//on ajoute aux tablmeaux les réponses
      //filtarge réalise en utilisantg la méthode .filter native des tableaux javascript
     // this.images=res.filter(x=>x.id<5);
      //console.log(res)});

  }




}
