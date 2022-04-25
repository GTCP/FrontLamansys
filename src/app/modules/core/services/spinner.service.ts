import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
     getSpinner() {
        setTimeout(myFunction, 1000);
        function myFunction(){
          let spin=document.getElementById("spinner")!;
          spin.classList.toggle("spinnerInvi");
          let box=document.getElementById("box")!;
          box.classList.toggle("boxVisible");
          //let box2=document.getElementById("box2")!;
          //box2.classList.toggle("boxVisible");
        }
    }
  constructor() { }
}
