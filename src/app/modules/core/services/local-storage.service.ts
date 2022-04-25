import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() {
	}

	public updateItem<T>(key: string, value: T): Observable<T> {
		const valueToSave = JSON.stringify(value);
		const valueInCache = JSON.parse(localStorage.getItem(key)||'[]');
		if (valueToSave !== valueInCache) {
			localStorage.setItem(key, valueToSave);
			return of(value);
		}
		return EMPTY;
	}

	public getItem<T>(key: string): Observable<T> {
		return JSON.parse(localStorage.getItem(key)||'[]');
	}

	public removeItem(key: string): Observable<void> {
		localStorage.removeItem(key);
		return of();
	}
}
