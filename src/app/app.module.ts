import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ReversePipe } from './reverse.pipe';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDataComponent } from './reactive/show-data/show-data.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ServicesService } from './services.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { EuserComponent } from './euser/euser.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { DetailsComponent } from './details/details.component';
import { FormsComponent } from './forms/forms.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    CreateTaskComponent,
    TaskListComponent,
    ReversePipe,
    TestComponent,
    ShowDataComponent,
    SubscribersComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    EuserComponent,
    FormloginComponent,
    DetailsComponent,
    FormsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
