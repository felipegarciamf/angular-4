import { TestBed, inject } from '@angular/core/testing';

import { PhotosProviderService } from './photos-provider.service';

describe('PhotosProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosProviderService]
    });
  });

  it('should be created', inject([PhotosProviderService], (service: PhotosProviderService) => {
    expect(service).toBeTruthy();
  }));
});
