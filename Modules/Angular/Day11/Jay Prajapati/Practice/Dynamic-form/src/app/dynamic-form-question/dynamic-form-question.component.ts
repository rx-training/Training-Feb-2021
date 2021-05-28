import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../question-base';
@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit(): void {
  }

}