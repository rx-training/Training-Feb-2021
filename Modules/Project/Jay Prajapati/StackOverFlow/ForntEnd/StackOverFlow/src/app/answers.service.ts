import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http : HttpClient) { }

  private _url = "https://localhost:44303/api/Home";
  
  
  getAnswer(queid : number){
    return this.http.get(this._url + '/answers/' + queid);
  }

  postAnswer(userid : number, queid : number, ans : any){
    return this.http.post('https://localhost:44303/api/' + userid + '/Answer/' + queid, ans);
  }
  
}
