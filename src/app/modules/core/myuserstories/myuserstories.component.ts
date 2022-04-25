import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { GetEpicByIdApiService } from '../../api-rest/services/get-epic-by-id-api.service';
import { GetUserstoriesApiService } from '../../api-rest/services/get-userstories-api.service';
@Component({
  selector: 'app-myallstories',
  templateUrl: './myuserstories.component.html',
  styleUrls: ['./myuserstories.component.scss']
})
export class MyuserstoriesComponent implements OnInit,OnDestroy {
  epics;  stories;
  project;   epic;
  idProject;  idEpic;
  lengthStories;
  getEpicById(){
    let epic=this.gEpicByIdApi.GetEpicByIdApi(Number(this.route.snapshot.paramMap.get('id')));
    epic.subscribe(data => {
      this.epic=data.data;
      this.idEpic=this.epic[0].id;
      this.getUserStories(this.idEpic);
    });
  }
  private getUserStories(idEpic: number):void{
    this.gUserStoriesApi.getUserStoriesApi(idEpic).subscribe(data => {
      this.stories=data.data;
      this.lengthStories=this.stories.length;
    });
  }
  constructor(private gEpicByIdApi: GetEpicByIdApiService,private gUserStoriesApi: GetUserstoriesApiService,private spinner: SpinnerService,private route: ActivatedRoute) {
  }
 ngOnInit(): void {
  this.spinner.getSpinner();
  this.getEpicById();
  }
  ngOnDestroy(): void {
  }
}