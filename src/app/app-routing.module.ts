import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'dashboard', 
    component: QuestionsComponent
  },
  {
    path:'auth', 
    component: LoginComponent
  },
  {
    path : '**',
    redirectTo : 'dashboard',
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
