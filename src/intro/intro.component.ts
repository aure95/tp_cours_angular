import {Component} from "@angular/core";

@Component({

	selector:'app-intro',
	templateUrl:'./intro.component.html',
	styleUrls:["./intro.component.css"]


})


export class IntroComponent
{
	 public groups: string[] =["ESD","POEI Java","POEC Symfony"]
  style1 :any={
  	'color':"green",
  	'text-decoration':"underline"
  };

  public message: string="petit message en provenance de la class AppComponent";
  public id: string ="span_1";
  public urlImage: string="https://i.ytimg.com/vi/lJjqLlAnYYM/maxresdefault.jpg";

  public compteur: number=0;
  public SHOW_GOOD_STUDENTS: boolean=false;
  public selectedValue: string="ESD";

  student ={
  	name: "toto",
  	age:12,
  	retired:false
  };

  students=["giorgio","leonardo","andrea"];

  players :Player[]=[{name:"chiellini",team:"Juventus",num:3,injured:true},
  {name:"Bonucci",team:"Milan AC",num:19,injured:false},
  {name:"Barzagli",team:"Juventus",num:315,injured:false}];

  //gerer event

  stud=[{firstname:"toto",lastname:"dupont",notes:[7,10,15],photo:"data:image/png;base64,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",groupe:"POEC Java"},
  		{firstname:"atat",lastname:"dfgiodjgijt",notes:[10,10,10],photo:"data:image/jpeg;base64,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",groupe:"POEC Java"},
  		{firstname:"titi",lastname:"huouio",notes:[20,20,19],photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgqcexgcSe1XfAYgd3UpwsRV5e386JgGYV1G-OODmYBxv_lmdDg",groupe:"ESD"}];



   test(): void
  {
  	this.compteur+=1;
  }

   calculMoyenne(tableau: number[]): string  //.tofixed renvoie une chaine de caractere
  {
  	var moy=0;
     for(var i=0;i<tableau.length;i++)
     {
     	moy+=tableau[i];
     }

     moy/=tableau.length;

     return(moy.toFixed(2));    
  }

   highlightStudents(): void
   {
   	 
      this.SHOW_GOOD_STUDENTS=!this.SHOW_GOOD_STUDENTS;
   }

   onChange(e): void
   {
   	 this.selectedValue=e.target.value;
     console.log(this.selectedValue);
   }//valeur selectionnée accessible accessible uniquement dans le corps de cette fonction (portée locale)



}