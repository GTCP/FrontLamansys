import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { GetProjectByIdApiService } from '../../api-rest/services/get-project-by-id-api.service';
import { GetEpicsApiService } from '../../api-rest/services/get-epics-api.service';
@Component({
  selector: 'app-myepics',
  templateUrl: './myepics.component.html',
  styleUrls: ['./myepics.component.scss']
})
export class MyepicsComponent implements OnInit {
  epics;
  lenthEpics;
  project;
  idProject;
  getProjectById():void{
    let idProject=this.gProjectApi.GetProjectByIdApi(Number(this.route.snapshot.paramMap.get('id')));
    idProject.subscribe(data => {
      this.project=data.data;
      this.idProject=this.project[0].id;
      this.getEpics(this.idProject);
    });
  }
  getEpics(id:number):void{
    let epics=this.gEpicsApi.getEpicsApi(id);
    epics.subscribe(data => {
      this.epics=data.data;
      this.lenthEpics=this.epics.length;
    });
  }
  constructor(private gEpicsApi: GetEpicsApiService,private gProjectApi: GetProjectByIdApiService ,private spinner: SpinnerService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.spinner.getSpinner();
    this.getProjectById();
  }
}