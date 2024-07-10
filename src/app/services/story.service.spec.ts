import { TestBed } from '@angular/core/testing';

import { StoryService } from './story.service';
import { StoryApi } from './story-api.service';
import { HttpProxy } from './http-proxy';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StoryService', () => {
  let service: StoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({  
        imports: [HttpClientTestingModule],
        providers:[StoryApi, HttpProxy, StoryService]});
        service = TestBed.inject(StoryService);
  });

  it('should be created StoryService', () => {
    expect(service).toBeTruthy();
  });
});