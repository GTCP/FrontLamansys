import { Component, OnInit,OnDestroy  } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { GetTasksApiService } from "../../api-rest/services/get-tasks-api.service";
import { GetTaskByIdApiService } from "../../api-rest/services/get-task-by-id-api.service";
import { GetUserstoryByIdApiService } from "../../api-rest/services/get-userstory-by-id-api.service";
import { AddTaskApiService } from "../../api-rest/services/add-task-api.service";
import { DeleteTaskApiService } from "../../api-rest/services/delete-task-api.service";
import { EditTaskApiService } from "../../api-rest/services/edit-task-api.service";
@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.scss']
})
export class MytasksComponent implements OnInit {
  tasks;lengthTasks;
  story;
  idStory;
  storyForAdd;   
  taskMock;
  openDialogDeleteTask(task:any) {
    let dialogRef = this.dialogDeleteTask.open(DeleteTaskComponent, {
      data: { delete: false}, hasBackdrop: false});
    dialogRef.afterClosed().subscribe(
      result => {
        if(result.delete){
          this.removeTaskApi.DeleteTaskApi(task.id).subscribe(data => {
            let response=data;
            console.log("RESPUESTA DE DELETE TASK");
            console.log(response);
            this.getTasks(this.idStory);
          });
        }
      }
    );
  }
  openDialogAddTask(){
    let dialogRef = this.dialogAddTask.open(AddTaskComponent, {
      data: { name: "",description: "",due: "",done: false, okey: false}, hasBackdrop: false});
    dialogRef.afterClosed().subscribe(
      result => {
        if(result.okey){ 
           this.taskMock={
            done: result.done,
            id:  0,
            name: result.name,
            description: result.description,
            story: this.storyForAdd,
            due: result.due,
        }};
        this.addTaskApi.addTaskApi(this.taskMock).subscribe(data => {
          let response=data;
          console.log("RESPUESTA DE ADD TASK");
          console.log(response);
          this.getTasks(this.idStory);
        });
      });
    }
  completeTask(task: any):void{
    if(task.done===true){
      task.done=false;
    }
    else {
      task.done=true;
    }
    this.editTaskApi.EditTaskApi(task.id,task.done);
  }
  getUserStoryById(){
    this.gUserStoryById.GetUserStoryByIdApi(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(data => {
      this.story=data.data;
      this.idStory=this.story[0].id;
      this.getTasks(this.idStory);
      this.storyForAdd=this.story[0];
    });
  }
  private getTasks(id: number):void{
    this.gTasksApi.GetTasksApi(id).subscribe(data => {
    this.tasks=data.data;
    this.lengthTasks=this.tasks.length;
    });
  }
  constructor(private editTaskApi:EditTaskApiService,private removeTaskApi: DeleteTaskApiService,private addTaskApi: AddTaskApiService,private gUserStoryById: GetUserstoryByIdApiService,private gTaskById: GetTaskByIdApiService,private gTasksApi: GetTasksApiService,private spinner: SpinnerService,private route: ActivatedRoute,private dialogDeleteTask: MatDialog,private dialogAddTask: MatDialog) {
  }
  ngOnInit(): void {
    this.spinner.getSpinner();
    this.getUserStoryById();
  }
}