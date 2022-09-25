import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
score:any = 0;
  constructor(private api:APIService) { }

  ngOnInit(): void {
    this.api.score$.subscribe((score:any)=>{
      console.log(typeof score,score);
      if(typeof score === 'number') {
        this.score = score;
      }
    })
  }

}
