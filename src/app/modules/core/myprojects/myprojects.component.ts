import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { HttpClient } from "@angular/common/http";
import { GetProjectsApiService } from "../../api-rest/services/get-projects-api.service";
@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {
  Projects;lengthProjects;
  getProjects():void{
    this.gProjectsApi.getProjectsApi().subscribe(data => {
    this.Projects=data.data;
    this.lengthProjects=this.Projects.length;
    });
  }
  constructor(private gProjectsApi: GetProjectsApiService,private spinner: SpinnerService,private route: ActivatedRoute,public http: HttpClient) {
  }
  ngOnInit():void {
    this.spinner.getSpinner();
    this.getProjects();
  }
}