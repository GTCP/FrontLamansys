import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FullScreenService } from './full-screen.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    TaskComponent,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ], 
  providers: [
    FullScreenService,
    LocalStorageService, 
  ],
  exports: [
    AddTaskComponent,
    TaskComponent]
})
export class TaskModule { }