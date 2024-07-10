/**
 * The class for story.
 */
export class Story {
  /** The number of days. */
  id? :number;
  /** The number of days. */
  title? :string;
  /** The number of days. */
  url? :string;

  /**
   * Creates the instance.
   * @param json The json.
   */
  constructor(json:any) {
    if (json) {
      if ('id' in json) {
        this.id = json.id;
      }
      if ('title' in json) {
        this.title = json.title;
      }
      if ('url' in json) {
        this.url = json.url;
      }
    }
  }  
}