import { Component, OnInit } from '@angular/core';
import { Task } from '../../../assets/Interfaces/task';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  addTask(task: Task): void {
    this.tasks.unshift(task);
    this.localStorage.save('tasks', this.tasks);
  }
  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.localStorage.save('tasks', this.tasks);
    }
  }
  /*
  editTask(task: Task){ 
    let index =this.tasks.indexOf(task);
    if(index > -1){
      console.log("ENTRO AL EDIT Y LLEGO AL SPLICE");
      console.log(task);
      this.tasks.splice(index,1,task);
      this.localStorage.save('tasks', this.tasks);
    }
  }
  //LLEGA EL VALOR ANTERIOR
  */
  completeTask(task:Task):void{
    const index=this.tasks.indexOf(task);
    if (index>-1){
      console.log(task);
      this.tasks.splice(index, 1, task);
      this.localStorage.save('tasks', this.tasks);
    }
  }
  constructor(private localStorage:LocalStorageService) { }
  ngOnInit(): void {
    this.tasks = this.localStorage.get('tasks');
  }
}