import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormsComponent } from './forms/forms.component';
import { EuserComponent } from './euser/euser.component';

const routes: Routes = [
  { path: '', component: FormloginComponent },
  // { path: 'details', component: DetailsComponent },
   { path: 'forms', component: FormsComponent },
   {path:'euser',component:EuserComponent},
    { path: 'euser/:id', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
