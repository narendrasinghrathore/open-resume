import { ControlsBase } from './controls.base';

export class TextareaQuestion extends ControlsBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
