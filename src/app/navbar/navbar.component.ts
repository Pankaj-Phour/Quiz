import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
score:any = 0;
index:any = 1;
  constructor(private api:APIService,
    private dialog:MatDialog,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.api.questionCount.subscribe((index:any)=>{
      if(typeof index === 'number') {
        this.index = index;
      }
    })
  }


  logout(){
    const data = {
      head: "Confirmation",
      msg: "Do you want to logout?",
      yes: "Logout",
      no: "Cancel",
    };
    const a = this.dialog.open(AlertDialogComponent,{
      disableClose: true,
      hasBackdrop: true,
      data: data,
      width: "350px",
      height: "250px",
      panelClass: "deleteCampaigns",
      
    })
    a.afterClosed().subscribe((res:any)=>{
      console.log(res);
      
      if(res=='yes'){
        this.api.obNotify({
          start:true,
          code:200,
          status:'success',
          message:'Logged out Successfully'
        })
        localStorage.clear();
        this.router.navigate(['/auth'])
      }
    })
  }
}
