import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
}