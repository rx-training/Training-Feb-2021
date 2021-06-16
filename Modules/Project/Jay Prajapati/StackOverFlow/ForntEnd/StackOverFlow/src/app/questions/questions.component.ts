import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  allQuestions : any;
  constructor(private questions: QuestionsService,private route: Router) { }
  ngOnInit(): void {
    
    this.questions.getAllQuestions().subscribe(
      res=>{
        this.allQuestions = res;
        console.log(res);
        console.log(this.allQuestions)
      },
      err=>console.log(err)
    )
    //console.log(this.allQuestions);
  }

  askQuestion(){
    this.route.navigate(['ask-question']);
  }



}
