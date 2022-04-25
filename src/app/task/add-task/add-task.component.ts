import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../../assets/Interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() newTask = new EventEmitter<Task>();
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(description: string): void {
    if (description.trim() === '') return;

    const task = {
      description,
      completed: false
    }
    this.description = '';
    this.newTask.emit(task);
  }
}