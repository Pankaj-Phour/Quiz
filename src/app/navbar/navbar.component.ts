import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
score:any = 0;
index:any = 1;
  constructor(private api:APIService) { }

  ngOnInit(): void {
    this.api.questionCount.subscribe((index:any)=>{
      if(typeof index === 'number') {
        this.index = index;
      }
    })
  }

}
