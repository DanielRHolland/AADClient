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

    private getStaffMember(id: string) {
      this.httpClient.get<StaffMember>(this.getOrigin() + '/g/' + id);
    }

    private getStaffList() {
      this.httpClient.get<StaffMember[]>(this.getOrigin() + '/l');
    }

    private saveStaffMember(staffMember: StaffMember) {
      this.httpClient.post<StaffMember>(this.getOrigin() + '/s', staffMember, this.connSettings.getOptions());
    }

    private deleteStaffMember(id: string) {
      this.httpClient.delete(this.getOrigin() + '/d/' + id);
    }

    getOrigin() {
      return this.connSettings.getOrigin() + '/staff';
    }
}
