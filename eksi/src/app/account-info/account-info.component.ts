import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../services/autho/autho.service';
import { ConnectionSettingsService } from '../services/connection-settings/connection-settings.service'

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})

export class AccountInfoComponent implements OnInit {
  ip: string;
  constructor(public authoService: AuthoService, public connSettings: ConnectionSettingsService) { }

  ngOnInit() {
    this.ip = this.connSettings.getOrigin();
  }

  setIp() {
    this.connSettings.changeOrigin(this.ip);
  }

}
