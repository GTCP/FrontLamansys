import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../assets/Interfaces/task';
import { CopyClipboardService } from '../copy-clipboard.service';
import { ShareWhattsapService } from '../share-whattsap.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {description: '', completed: false};
  @Output() deletedTask = new EventEmitter<Task>();
  @Output() edittTask = new EventEmitter<Task>();
  @Output() copyy = new EventEmitter<string>();
  @Output() shareWAA = new EventEmitter<string>();
  @Output() updatedTask = new EventEmitter<Task>();


  constructor(private cClipboard: CopyClipboardService,private shareWHAT :ShareWhattsapService) { }
  ngOnInit(): void {
  }
  deleteTask(task: Task): void {
    this.deletedTask.emit(task);
  }
  completeTask(task: Task): void {
    (task.completed === true) ? task.completed = false : task.completed = true;
    this.updatedTask.emit(task);
  }
  copy(text:string):void{
    this.cClipboard.copyClipboard(text);
  }
  shareWA(text: string): void {
    this.shareWHAT.shareWhattsap(text);
  } 
//probando
fTransparent: Record<string, string> = {
  'background-color': 'transparent'
}
}