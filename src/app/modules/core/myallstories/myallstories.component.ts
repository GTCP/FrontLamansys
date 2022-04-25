import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { HttpClient} from "@angular/common/http";
import { GetAllUserstoriesApiService } from "../../api-rest/services/get-all-userstories-api.service";
@Component({
  selector: 'app-myallstories',
  templateUrl: './myallstories.component.html',
  styleUrls: ['./myallstories.component.scss']
})
export class MyallstoriesComponent implements OnInit {
  stories;lengthStories;
  getAllUserStories():void{
    this.gStories.getAllUserStoriesApi().subscribe(data => {
      this.stories=data.data;
      this.lengthStories=this.stories.length;
    });
  }
  constructor(private gStories: GetAllUserstoriesApiService,private spinner: SpinnerService,private route: ActivatedRoute,public http: HttpClient) {
  }
 ngOnInit(): void {
    this.spinner.getSpinner();
    this.getAllUserStories();
 }
}