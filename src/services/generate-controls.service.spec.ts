import { TestBed, inject } from '@angular/core/testing';

import { GenerateControlsService } from './generate-controls.service';

describe('GenerateControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateControlsService]
    });
  });

  it('should be created', inject([GenerateControlsService], (service: GenerateControlsService) => {
    expect(service).toBeTruthy();
  }));
});
