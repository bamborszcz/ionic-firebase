import { TestBed } from '@angular/core/testing';

import { FirestoreServicesService } from './firestore-services.service';

describe('FirestoreServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreServicesService = TestBed.get(FirestoreServicesService);
    expect(service).toBeTruthy();
  });
});
