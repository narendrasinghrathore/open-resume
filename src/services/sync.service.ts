import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SyncService {
    private fontSize_ = 24;

    get fontSize(): number {
        return this.fontSize_;
    }

    set fontSize(value: number) {
        this.fontSize_ = value;
    }

}
