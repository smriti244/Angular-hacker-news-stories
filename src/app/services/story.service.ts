import { Injectable, PipeTransform } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { StoryApi } from './story-api.service';
import { Story } from '../models/story';

/**
 * The story service.
 */
@Injectable()
export class StoryService {
  /**
   * Creates the instance.
   * @param storyApi The story API.
   */
  constructor(private storyApi: StoryApi) {}

  /**
   * Gets the stories.
   * @param limit The limit.
   * @returns An observable of list of stories.
   */
  getStories(limit?: number): Observable<Story[]> {
    return this.storyApi.getStories(limit);
  }
}
