import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  constructor(
    private httpClient: HttpClient,
    private connSettings: ConnectionSettingsService) { }

  public login(staffId: string, staffPassword: string) {
    return this.httpClient.get(
      this.getOrigin()
      + '/l'
      + '?id=' + staffId
      + '&hash=' + this.hash(staffPassword));
  }

  private hash(s: string) {
    return s;
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/auth';
  }

}
