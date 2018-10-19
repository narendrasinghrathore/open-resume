import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { GenerateControlsService } from 'src/services/generate-controls.service';
import { ControlsBase } from '../controls/controls.base';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {

  @Input() questions: ControlsBase<any>[] = [];
  dynamicFormBuilder: FormGroup;
  payLoad = '';
  constructor(private qcs: GenerateControlsService) { }

  ngOnInit() {
    this.dynamicFormBuilder = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.dynamicFormBuilder.value);
  }

  drop(event: CdkDragDrop<ControlsBase<any>[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

}
