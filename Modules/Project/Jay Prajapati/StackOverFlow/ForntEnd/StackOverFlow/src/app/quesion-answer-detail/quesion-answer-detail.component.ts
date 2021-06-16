import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {QuestionsService} from '../questions.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-quesion-answer-detail',
  templateUrl: './quesion-answer-detail.component.html',
  styleUrls: ['./quesion-answer-detail.component.css']
})
export class QuesionAnswerDetailComponent implements OnInit {

  userId : any;
  queId : any;
  queAnsDetails : any ={};
  constructor(private fb : FormBuilder,
          private questions : QuestionsService,
          private route : ActivatedRoute,
          private authService :AuthenticationService,
          private userService : UsersService) 
          { }


  answerForm = this.fb.group({
    Answer1: ['',[Validators.required,Validators.minLength(10)]],
    
  });

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    
    this.queId = parseInt(this.route.snapshot.paramMap.get('id')!);
    
    console.log(this.queId + 'Question');
    this.questions.getQuestion(this.queId).subscribe(
      res=> {this.queAnsDetails = res; console.log(res)},
      err => console.log(err)
    )
  }

  get answer(){
    return this.answerForm.get('Answer1')!;
  }

  submit(){
    
    this.userService.postAnswer(this.userId,this.queId,this.answerForm.value).subscribe(
      res=>console.log(res)
    );
  }
  UpVoteQuestion(){
    this.userService.giveUpVoteToQuestion(this.userId,this.queId).subscribe(
      (res : any)=>{
        console.log(res.message);
        
      }
    )
  }

  DownVoteQuestion(){
    this.userService.giveDownVoteToQuestion(this.userId,this.queId).subscribe(
      (res : any)=>{
        console.log(res.message);
      }
    )
  }

  BookmarkQuestion(){
    this.userService.bookmarkQuestion(this.userId,this.queId).subscribe(
      (res:any)=>{
        console.log(res.message);
      }
    )
  }


  UpVoteAnswer(ansId : number){
    this.userService.giveUpVoteToAnswer(this.userId,this.queId,ansId).subscribe(
      res=>console.log(res)
    )
  }

  DownVoteAnswer(ansId : number){
    this.userService.giveDownVoteToAnswer(this.userId,this.queId,ansId).subscribe(
      res=>console.log(res)
    )

  }

  




}
