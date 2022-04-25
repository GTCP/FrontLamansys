import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
		if(localStorage.getItem('token') !== null ){
			return true;
		}
		else {
			return false;
		}
	}
	authentication(username: string, password: string): Observable<any> {
		return this.http.post("https://lamansys-tasks-fake-api.herokuapp.com/api/login", { username: username, password: password});
	}
	constructor(private http: HttpClient,private localStorage: LocalStorageService) { }
}