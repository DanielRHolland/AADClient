import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionSettingsService {
  constructor() { }

  private origin = new BehaviorSubject('http://localhost:3000');
  observableOrigin = this.origin.asObservable();

  changeOrigin(origin: string) {
    this.origin.next(origin);
  }

  getOrigin() {
    return this.origin.getValue();
  }
}
