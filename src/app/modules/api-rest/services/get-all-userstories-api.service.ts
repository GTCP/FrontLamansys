import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { LocalStorageService } from '../../core/services/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class GetAllUserstoriesApiService {
  getAllUserStoriesApi(): Observable<any> {
    return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/stories/', 
    {
      headers: new HttpHeaders({
          'auth': String(this.localStorage.getItem('token')),
      })
    });
  }
  constructor(private http: HttpClient,private localStorage: LocalStorageService) { }
}