/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExercisesServiceService } from './exercises-service.service';

describe('Service: ExercisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercisesServiceService]
    });
  });

  it('should ...', inject([ExercisesServiceService], (service: ExercisesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
