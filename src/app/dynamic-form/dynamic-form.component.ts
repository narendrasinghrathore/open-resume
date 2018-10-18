import { Component, Input } from '@angular/core';
import { GenerateControlsService } from 'src/services/generate-controls.service';
import { ControlsBase } from '../controls/controls.base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [GenerateControlsService],
})
export class DynamicFormComponent  {

  @Input() question: ControlsBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
