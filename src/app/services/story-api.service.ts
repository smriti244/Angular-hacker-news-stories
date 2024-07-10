import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpProxy } from './http-proxy';
import { Story } from '../models/story';

/**
 * A service class to interact with the story service.
 */
@Injectable()
export class StoryApi {

  /**
   * Creates the instance
   * @param http A reference to a service used to invoke the methods of the REST API.
   */
  constructor(private http: HttpProxy) 
  {}

 /**
   * Gets the studies list.
   * @param limit The limit.
   * @returns An observable of the request result.
   */
  getStories(limit?: number): Observable<Story[]> {
    return this.http.get<any>('/Story', undefined)
        .pipe(
          map(v => (Array.isArray(v) ? v.map(i => new Story(i)) : v)),
        );
  }
}
