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
  types = ['X','/','+','-','-','/','+','/','+','X'];
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

  submit(e:any){
    console.log(e);
    this.messageShow = true;
    setTimeout(() => {
      this.messageShow = false;
    }, 2500);
    if(this.correct===true){
      this.score += 1;
      console.log(this.score);
      
      this.api.score.next(this.score)
      // setTimeout(()=>{
      //   window.location.reload()
      // },1500)
    }
    console.log("Submitted",this.form);
    
  }

  input(e:any,question:any){
    // console.log(e);
    console.log(question);
    let data = question.split(' ');
    // console.log(data);
    let number1 = +(data[0])
    let number2 = +(data[2])
    console.log(number1,number2);
    let type = data[1]
    console.log(type);
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
      answer = number1 / number2
    }
    
    
    console.log(+e.target.value,answer);
    console.log(typeof +e.target.value,typeof answer);
    
    if(+answer === +e.target.value){
      console.log("Hurray ! Correct Answer");
      this.message = 'Correct Answer';
      this.correct = true;
    }
    else{
      this.message = 'Wrong Answer';
      this.correct = false;
    }
  }

  questionGenerator(){
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

}
