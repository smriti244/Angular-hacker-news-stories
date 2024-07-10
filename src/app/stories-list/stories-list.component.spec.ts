import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoriesListComponent } from './stories-list.component';
import { StoryService } from '../services/story.service';
import { StoryApi } from '../services/story-api.service';
import { HttpProxy } from '../services/http-proxy';

describe('StoriesListComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
    declarations: [StoriesListComponent],
    providers:[StoryService,StoryApi,HttpProxy]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StoriesListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
