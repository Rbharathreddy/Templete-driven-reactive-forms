import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  CreatTask =new Subject<string>()

  OnCreatTask(value:string){
    this.CreatTask.next(value)
  }
}
