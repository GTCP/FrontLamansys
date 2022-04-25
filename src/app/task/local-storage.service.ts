import { Injectable } from '@angular/core';
import { Task } from '../../assets/Interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  get(key:string) {
    return JSON.parse(localStorage.getItem(key)||'[]');
  }
  save(key:string,tasks:Task[]): void {
    localStorage.setItem(key,JSON.stringify(tasks));
  }
  constructor() { }
}
