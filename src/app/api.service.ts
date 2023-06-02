import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }



  public score = new BehaviorSubject<any>('');
  score$ = this.score.asObservable();


  public index = new BehaviorSubject<any>('');
  index$ = this.score.asObservable();

  @Output() questionCount = new EventEmitter();

  questionUpdate(index:any){
    this.questionCount.emit(index)
  }

}
