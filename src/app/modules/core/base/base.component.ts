import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  menuFunction(menu: any){
    menu.toggle();
  }
  constructor() { 
  }
  ngOnInit(): void {
  }
}