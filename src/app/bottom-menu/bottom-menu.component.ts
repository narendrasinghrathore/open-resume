import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSliderChange } from '@angular/material';
import { SyncService } from 'src/services/sync.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  fontSize: number;
  minFontVal = 20;
  maxFontValue = 40;

  fontSizeDisplay = '';

  setFontDisplay(fontsize: number) {
    this.syncService.fontSize = this.fontSize;
    this.fontSizeDisplay = `${fontsize}px`;
  }

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomMenuComponent>, public syncService: SyncService) {
  }

  ngOnInit(): void {
    this.fontSize = this.syncService.fontSize;
    this.setFontDisplay(this.fontSize);
  }

  setFontSize(increaseFont?: boolean) {
    if (increaseFont) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }
    this.setFontDisplay(this.fontSize);
  }

  log(event: MatSliderChange) {
    this.fontSize = event.value;
    this.setFontDisplay(this.fontSize);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss(this.fontSize);
    event.preventDefault();
  }

}
