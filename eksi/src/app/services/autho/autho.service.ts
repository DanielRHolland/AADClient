import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';
import { StaffMember } from '../../models/staff_member.model';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private apiKey = new BehaviorSubject(null);
  observableApiKey = this.apiKey.asObservable();

  private nNumber = new BehaviorSubject(null);
  observablenNumber = this.nNumber.asObservable();

  isStaff = false;

  constructor(
    private httpClient: HttpClient,
    private connSettings: ConnectionSettingsService) { }

  public login(user: StaffMember) {
    const obs = this.httpClient.get<string>(
      this.getOrigin()
      + '/l'
      + '?id=' + user.id
      + '&hash=' + this.hash(user.passwordHash));
    this.changeNNumber(user.id);
    obs.subscribe(data => this.changeApiKey( data ));
    return obs;
  }

  public check(user: StaffMember) {
    return this.httpClient.get<boolean>(this.connSettings.getOrigin() + '/staff/g/password/' + user.id + ',' + user.passwordHash);
  }

  private hash(s: string) {
    return s;
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/auth';
  }

  changeApiKey(apiKey: string) {
    this.apiKey.next(apiKey);
  }

  getApiKey() {
    return this.apiKey.getValue();
  }

  changeNNumber(nNumber: string) {
    this.nNumber.next(nNumber);
  }

  getNNumber() {
    return this.nNumber.getValue();
  }

  logOut() {
    this.changeApiKey(null);
    this.changeNNumber(null);
  }
}
