import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent} from './intro/intro.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { ListStudentComponent } from './list-student/list-student.component'
import {StudentService} from './services/student.service'


@NgModule({
  declarations: [

    //components
    AppComponent,
    IntroComponent,
    StudentComponent,
    ListStudentComponent




  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
