import { Injectable } from '@angular/core';
import { ControlsBase } from 'src/app/controls/controls.base';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextboxQuestion } from 'src/app/controls/textbox.control';
import { DropdownQuestion } from 'src/app/controls/dropdown.control';
import { TextareaQuestion } from 'src/app/controls/textarea.control';

@Injectable({
  providedIn: 'root'
})
export class GenerateControlsService {

  constructor() { }
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: ControlsBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),

      new TextareaQuestion({
        key: 'emailAddress',
        label: 'Profile Summary',
        type: 'textarea',
        order: 5
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  toFormGroup(questions: ControlsBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
