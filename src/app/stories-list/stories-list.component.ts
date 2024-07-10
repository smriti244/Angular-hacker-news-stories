import { Component } from '@angular/core';
import { StoryService } from '../services/story.service';
import { BehaviorSubject, combineLatest, map} from 'rxjs';
import { Story } from '../models/story';

/**
 * A component to show stories list.
 */
@Component({
  selector: 'stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent {
  /** The search key. */
  private _searchKey:string="";

  /** The selected page. */
  private _page:number  = 1;

  /** The page size for pagination. */
  protected readonly pageSize:number = 15;

  /** The number of total stories shown in the table. */
  protected total:number=0;

  /** A behavior subject showing the loading status of list. */
  readonly loading$ = new BehaviorSubject<boolean>(true);

  /** A behavior subject indicating filter. */
  private _search$ = new BehaviorSubject<boolean>(false);

  /** A behavior subject indicating pagination. */
  private _pagination$ = new BehaviorSubject<boolean>(false);

  /** An observable of list of stories. */
  readonly stories$=this.storyService.getStories();

  /** An observable of list of filtered stories. */
  protected readonly filteredStories$ = combineLatest([this.stories$,this._search$]).pipe(
    map(([stories,_]) => {
      this.loading$.next(false);
      const filteredStories=stories.filter(story=>this.matches(story,this.searchKey));
      this.total=filteredStories.length;
      return filteredStories;
    })
  );

  /** An observable of list of filtered stories with pagination. */
  protected readonly items$ = combineLatest([this.filteredStories$,this._pagination$]).pipe(
    map(([filteredStories,_]) =>
      filteredStories.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
   )
  );

  /** The selected page. */
  get page(): number {
    return this._page;
  }
  set page(value: number) {
    this._page=value;
    this._pagination$.next(true);
  }

  /** The search key. */
  get searchKey(): string {
  return this._searchKey;
  }
  set searchKey(value: string) {
    this._searchKey=value;
    this._search$.next(true);
  }

  /**
  * Creates the instance.
  * @param storyService The story service.
  **/
  constructor(private readonly storyService: StoryService) 
  {}

  /**
  * Handles the filtering for table.
  * @param story The story.
  * @param term The search term.
  * @returns A boolean indicating if the story matches the search term.
  **/
  protected matches(story: Story, term: string) : boolean | undefined{
    return (
      story.title?.toLowerCase().includes(term.toLowerCase()) ||
      story.url?.includes(term)
    );
  }
}
