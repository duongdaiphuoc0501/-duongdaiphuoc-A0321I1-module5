import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doi-mau',
  templateUrl: './doi-mau.component.html',
  styleUrls: ['./doi-mau.component.css']
})
export class DoiMauComponent implements OnInit {
  background = '#00e067';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value){
    this.background = value;
  }
}
