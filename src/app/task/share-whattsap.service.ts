import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShareWhattsapService {
  shareWhattsap(text : string): void{
    window.open("whatsapp://send?text="+text);
  }
  constructor() { }
}
