import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz';
  login:boolean = false;
  ngOnInit(){
    // console.log("Hello from app component");
    if(localStorage.getItem('logged_in')){
      this.login = true;
    }
  }
}
