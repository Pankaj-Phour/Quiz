import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }



  public score = new BehaviorSubject<any>('');
  score$ = this.score.asObservable();


  public index = new BehaviorSubject<any>('');
  index$ = this.score.asObservable();

  @Output() questionCount = new EventEmitter();

  questionUpdate(index:any){
    this.questionCount.emit(index)
  }

  signUp(endpoint:any,params:any){
    return this.http.post(environment.URL + endpoint,params)
  }

  signIn(endpoint:any,params:any){
   return  this.http.post(environment.URL + endpoint,params)
  }


  otpChecker(endpoint:any,params:any){
    return this.http.post(environment.URL + endpoint,params)
  }

}
