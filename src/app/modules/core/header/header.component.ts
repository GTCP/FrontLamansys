import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute= "";
  back(): void {
    this.location.back()
  }    
  constructor(private router: Router,private location: Location) { 
    router.events.subscribe(event => {
      this.currentRoute = router.url;          
    });
  }
  ngOnInit(): void {
  }
}