import { TestBed } from '@angular/core/testing';

import { PlutoniumVisualizationService } from './plutonium-visualization.service';

describe('PlutoniumVisualizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlutoniumVisualizationService = TestBed.get(PlutoniumVisualizationService);
    expect(service).toBeTruthy();
  });
});
