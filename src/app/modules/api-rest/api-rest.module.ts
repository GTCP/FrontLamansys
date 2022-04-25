import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetProjectsApiService } from '../api-rest/services/get-projects-api.service';
import { AuthService } from '../api-rest/services/auth.service';
import { GetProjectByIdApiService } from '../api-rest/services/get-project-by-id-api.service';
import { GetEpicsApiService } from '../api-rest/services/get-epics-api.service';
import { GetUserstoryByIdApiService } from '../api-rest/services/get-userstory-by-id-api.service';
import { GetUserstoriesApiService } from '../api-rest/services/get-userstories-api.service';
import { GetAllUserstoriesApiService } from '../api-rest/services/get-all-userstories-api.service';
import { GetTasksApiService } from '../api-rest/services/get-tasks-api.service';
import { GetTaskByIdApiService } from '../api-rest/services/get-task-by-id-api.service';
import { AddTaskApiService } from '../api-rest/services/add-task-api.service';
import { DeleteTaskApiService } from "../api-rest/services/delete-task-api.service";
import { EditTaskApiService } from "../api-rest/services/edit-task-api.service";
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
	],providers: [EditTaskApiService,DeleteTaskApiService,AddTaskApiService,GetTaskByIdApiService,GetTasksApiService,GetUserstoryByIdApiService,GetUserstoriesApiService,GetAllUserstoriesApiService,AuthService,GetProjectsApiService,GetProjectByIdApiService,GetEpicsApiService]
})
export class ApiRestModule {
}