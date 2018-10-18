import { ControlsBase } from './controls.base';

export class TextboxQuestion extends ControlsBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
