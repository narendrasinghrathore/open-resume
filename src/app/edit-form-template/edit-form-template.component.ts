import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';
import { SyncService } from 'src/services/sync.service';
import { StorageService } from 'src/services/storage.service';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-edit-form-template',
  templateUrl: './edit-form-template.component.html',
  styleUrls: ['./edit-form-template.component.css']
})
export class EditFormTemplateComponent implements OnInit {

  sections: { name: string, value: string }[] = [];
  a4Form: FormGroup;

  fontSize: number;
  skipKey = ['name_txt', 'contact_txt'];
  headings = [
    { name: 'professional_summary_txt', value: 'Professional Summary' },
    { name: 'work_exp_txt', value: 'Work Expirence' },
    { name: 'education_txt', value: 'Education' },
    { name: 'certificate_txt', value: 'Certifications' },
    { name: 'publification_txt', value: 'Publications' },
    { name: 'professional_org_txt', value: 'Professional Organizations' },
    { name: 'skills_txt', value: 'Skills' }
  ];

  constructor(private bottomSheet: MatBottomSheet, private syncService: SyncService,
    public storageService: StorageService) {
    this.a4Form = new FormGroup({});
  }

  openBottomSheet(): void {
    const sheetRef = this.bottomSheet.open(BottomMenuComponent);

    sheetRef.afterDismissed().subscribe((data) => {
      this.fontSize = this.syncService.fontSize;
    });
  }

  checkIfStored(): void {
    if (this.storageService.isStored) {
      this.loadResume();
    } else {
      this.createResume();
    }
  }

  getHeading(key: string): string {
    const item = this.headings.filter((data) => {
      return data.name === key;
    });
    if (item.length !== 0) {
      return item[0].value;
    }
  }

  loadResume() {
    const arr = this.storageService.resume;
    Object.keys(arr).forEach((key, index) => {
      this.a4Form.addControl(key, new FormControl(arr[key]));
      if (this.skipKey.indexOf(key) === -1) {
        this.sections.push({
          name: key,
          value: arr[key]
        });
      }
    });
  }


  ngOnInit() {
    this.fontSize = this.syncService.fontSize;
    this.checkIfStored();
  }

  createResume() {
    this.a4Form.addControl('name_txt', new FormControl('Your Name'));
    this.a4Form.addControl('contact_txt', new FormControl(' abc@mail.com , +91 -9601532341 '));
    this.sections = [
      { name: 'professional_summary_txt', value: 'Professional Summary' },
      { name: 'work_exp_txt', value: 'Work Expirence' },
      { name: 'education_txt', value: 'Education' },
      { name: 'certificate_txt', value: 'Certifications' },
      { name: 'publification_txt', value: 'Publications' },
      { name: 'professional_org_txt', value: 'Professional Organizations' },
      { name: 'skills_txt', value: 'Skills' }
    ];
    this.sections.forEach(element => {
      this.a4Form.addControl(
        element.name, new FormControl(element.value)
      );
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.a4Form.value);
  }

  saveChanges() {
    this.storageService.resume = this.a4Form.value;
    console.log(this.a4Form.value);
  }


}
