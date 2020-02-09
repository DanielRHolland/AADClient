import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Output() query = new EventEmitter<string>();
  constructor() { }

  searchterm = '';
  ngOnInit() {

  }

}
