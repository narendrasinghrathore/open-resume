import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-form-template',
  templateUrl: './edit-form-template.component.html',
  styleUrls: ['./edit-form-template.component.css']
})
export class EditFormTemplateComponent implements OnInit {

  sections: string[];
  a4Form: FormGroup;
  constructor() { }

  ngOnInit() {
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
