import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FullScreenService {
  fullScreen() {
    if ( ! document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    else{ 
        document.exitFullscreen();
    }
  }
  constructor() { }
}