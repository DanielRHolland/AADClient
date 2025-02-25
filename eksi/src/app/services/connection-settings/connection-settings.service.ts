import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class ConnectionSettingsService {
  constructor() { }

  private origin = new BehaviorSubject('http://159.65.81.247:8080');//'http://localhost:8080');
  observableOrigin = this.origin.asObservable();

  changeOrigin(origin: string) {
    this.origin.next(origin);
  }

  getOrigin() {
    return this.origin.getValue();
  }

  getOptions() {
    return httpOptions;
  }
}
