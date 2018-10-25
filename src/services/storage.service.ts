import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private _localStorageKey = 'open_resume_key';

    get isStored(): boolean {
        return localStorage.getItem(this._localStorageKey) === null ? false : true;
    }

    get resume(): any {
        return this.isStored ? JSON.parse(localStorage.getItem(this._localStorageKey)) : null;
    }

    set resume(value: any) {
        localStorage.setItem(this._localStorageKey, JSON.stringify(value));
    }

}
