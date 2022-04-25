import { Component, OnInit } from '@angular/core';
import { FullScreenService } from '../full-screen.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    fullScreen() {
      this.fScreen.fullScreen();
    }
  constructor(private fScreen: FullScreenService) { }
  ngOnInit(): void {
  }
}

