import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyClipboardService {

  copyClipboard( text : string){
    navigator.clipboard.writeText(text);
  }
  constructor() { }
}
