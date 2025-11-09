import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  onSubscribe(type: string) {
    alert(`Thanks for '${type}' subscription. You can access the service now.`);
  }
}

