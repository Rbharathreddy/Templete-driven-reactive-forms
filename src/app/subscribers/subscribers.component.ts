import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent {
 showForm= false
  
  constructor(private service: ServicesService){}

  onSub1(){

  this.service.onSubscribe('premium')
  }
  onSub(){

  this.service.onSubscribe('premium')

  
   this.service.onSubscribe('montly')

  }
   toggleForm() {
    this.showForm = true;
  }

}
