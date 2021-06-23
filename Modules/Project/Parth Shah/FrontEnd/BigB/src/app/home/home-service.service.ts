import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Category } from '../admin/category/category';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}Category`);
  }

 
}
