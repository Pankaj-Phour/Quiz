import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }



  public score = new BehaviorSubject<any>('');
  score$ = this.score.asObservable();
}
