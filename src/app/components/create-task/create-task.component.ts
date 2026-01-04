import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject, ReplaySubject, Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';   // ✅ IMPORTANT IMPORT

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  newTask: string = '';

  student = {
    id: 101,
    name: 'john doe',
    marks: 88.4567,
    admissionDate: new Date('2023-09-15'),
    city: 'london'
  };

  myObser = from([2, 3, 4, 5, 5]);

  trans = this.myObser.pipe(
    map(val => val * 5)   // ✔️ works now
  );

  users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
    { name: 'David', active: true }
  ];

  constructor(private task: TaskService) {}

  CreateTask() {
    this.task.OnCreatTask(this.newTask)
    this.newTask = '';
  }

  ngOnInit(): void {

    const sub = new BehaviorSubject<number>(12);

    sub.next(100);
    sub.next(200);

    sub.subscribe((data) => {
      console.log("SUBSCRIBER 1:", data);
    });

    sub.subscribe((data) => {
      console.log("SUBSCRIBER 2:", data);
    });

    sub.next(2023);

    sub.subscribe((data) => {
      console.log("SUBSCRIBER 3:", data);
    });

    // Observable with map
    this.trans.subscribe(result => {
      console.log(result); // 10, 15, 20, 25, 25
    });
  }

  selectedState = '';

  states = [
    { id: 'TN', name: 'Tamil Nadu' },
    { id: 'KA', name: 'Karnataka' }
  ];

  cities: { [key: string]: string[] } = {
    TN: ['Chennai', 'Coimbatore', 'Madurai'],
    KA: ['Bengaluru', 'Mysuru', 'Mangalore']
  };

  getCities(stateId: string) {
    return this.cities[stateId] || [];
  }
}
