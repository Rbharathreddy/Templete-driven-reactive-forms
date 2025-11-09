import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

   newTask:string =''

    student = {
    id: 101,
    name: 'john doe',
    marks: 88.4567,
    admissionDate: new Date('2023-09-15'),
    city: 'london'
  };

   users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
    { name: 'David', active: true }
  ];
  constructor( private task:TaskService){}

  CreateTask(){
    // console.log(this.newTask)
    this.task.OnCreatTask(this.newTask)
       this.newTask = '';
  }
ngOnInit(): void {
  // const sub = new Subject();
  // const sub =new BehaviorSubject <number> (12)
  const sub =new ReplaySubject <number> (2)

  sub.next(100)
  sub.next(200)
  
  sub.subscribe((data)=>{
    console.log("SUBSCRIVEERR 1",data)
  })
  sub.subscribe((data)=>{
    console.log("SUBSCRIVEERR 2",data)
  })

  sub.next(2023)

  sub.subscribe((data)=>{
    console.log("SUBSCRIVEERR 3",data)
  })

}

}
