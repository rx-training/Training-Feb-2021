import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private baseUrl = "https://localhost:44303/api/Home";
  
  
  constructor(private http : HttpClient) { }

  getTopQuestions(){
    return this.http.get(this.baseUrl + '/topQuestions');
  }

  getAllQuestions(){
    return this.http.get(this.baseUrl + '/allQuestions');
  }
  getQuestion(queid : number){
    return this.http.get(this.baseUrl +'/question/' + queid);
  }


}
