import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';
import { Injectable } from '@angular/core';
import { StaffMember } from '../../models/staff_member.model'

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(
    private httpClient: HttpClient,
    private connSettings: ConnectionSettingsService) { }

    public getStaffMember(id: string) {
     return this.httpClient.get<StaffMember>(this.getOrigin() + '/g/' + id);
    }

    public getStaffList() {
     return this.httpClient.get<StaffMember[]>(this.getOrigin() + '/l');
    }

    public saveStaffMember(staffMember: StaffMember) {
     return this.httpClient.post<StaffMember>(this.getOrigin() + '/s', staffMember, this.connSettings.getOptions());
    }

    public deleteStaffMember(id: string) {
      return this.httpClient.delete(this.getOrigin() + '/d/' + id);
    }

    private getOrigin() {
      return this.connSettings.getOrigin() + '/staff';
    }
}
