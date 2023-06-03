import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'dashboard', 
    component: QuestionsComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'auth', 
    component: LoginComponent
  },
  {
    path : '**',
    redirectTo : 'auth',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
