import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';
import { SyncService } from 'src/services/sync.service';
@Component({
  selector: 'app-edit-form-template',
  templateUrl: './edit-form-template.component.html',
  styleUrls: ['./edit-form-template.component.css']
})
export class EditFormTemplateComponent implements OnInit {

  sections: string[];
  a4Form: FormGroup;

  fontSize: number;

  constructor(private bottomSheet: MatBottomSheet, private syncService: SyncService) { }

  openBottomSheet(): void {
    const sheetRef = this.bottomSheet.open(BottomMenuComponent);

    sheetRef.afterDismissed().subscribe((data) => {
      this.fontSize = this.syncService.fontSize;
    });
  }

  ngOnInit() {
    this.fontSize = this.syncService.fontSize;
    this.a4Form = new FormGroup({});
    this.sections = [
      'Edit Your Name',
      'Professional Summary',
      'Work Expirence',
      'Education',
      'Certifications',
      'Publications',
      'Professional Organizations',
      'Skills'
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.a4Form.value);
  }


}
