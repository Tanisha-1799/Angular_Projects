import { Injectable } from '@angular/core';
//now we have to import httpClient module in app.modules
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestionJson(){
    //to get the json
    return this.http.get<any>("assets/questions.json");
  }
}
