import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  message: any;

  setMessage(data: any) {
    //console.log(data);
    this.message = data
  }
  getMessage() {
    return this.message
  }
}
