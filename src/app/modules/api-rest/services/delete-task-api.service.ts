import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { LocalStorageService } from '../../core/services/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class DeleteTaskApiService {
  DeleteTaskApi(id: number): Observable<any> {
    return this.http.delete("https://lamansys-tasks-fake-api.herokuapp.com/api/tasks/"+ id, 
    {
      headers: new HttpHeaders({
          'auth': String(this.localStorage.getItem('token')),
      })
    });
  }
  constructor(private http: HttpClient,private localStorage: LocalStorageService) { }
}