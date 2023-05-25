import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  form:FormGroup;
  score:any = 0;
  correct:boolean = false;
  messageShow:boolean = false;
  types = ['X','+','-','-','+','+','X','-','X','+','-'];
  message:any = "Please answer the question to proceed";
  constructor(private api:APIService) { }
question:any = "What is 7 X 9 ?"
  ngOnInit(): void {
    console.log(this.form);
    this.validation();
    this.questionGenerator()
  }

  validation(){
    this.form = new FormGroup({
      answer: new FormControl('',Validators.required)
    })
  }

  submit(){
    this.messageShow = true;
    if(this.correct===true){
      setTimeout(() => {
        this.messageShow = false;
      }, 2500);
      // setTimeout(() => {
      //   this.questionGenerator();
      // }, 1000);
      this.score += 1;
      this.api.score.next(this.score)
    }
  }

  input(e:any,question:any){
    console.log(question);
    let data = question.split(' ');
    let number1 = +(data[0])
    let number2 = +(data[2])
    let type = data[1]
    let answer;
    if(type== '-'){
      answer = number1 - number2;
    }
    else if(type== '+'){
      answer = number1 + number2;
    }
    else if(type== 'X'){
      answer = number1 * number2
    }
    else{
      answer = 'Answer'
    }
    
    if(+answer === +e.target.value){
      this.message = 'Correct Answer';
      this.correct = true;
    }
    else{
      this.message = 'Wrong Answer';
      this.correct = false;
    }
  }

  KeyDown(e:any){
    if(e.keyCode === 13){
      this.submit()
    }
    
  }

  questionGenerator(){
    this.form.reset();
    let a = Math.round(Math.random()*100);
    let b = Math.round(Math.random()*100);
    console.log(a,b);
    let index = Math.ceil(Math.random()*10);
    console.log(index);
    let type = this.types[index-1]
    console.log(type);
    let question = `${a} ${type} ${b}`;
    console.log(question);
    this.question = question;
  }

  skip(){
    this.questionGenerator();
  }

}
