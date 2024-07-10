import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Base class which can be used to access the REST API.
 */
@Injectable()
export class HttpProxy {

  /** The default base url. */
  private baseUrl = "https://localhost:44335";

  /** The HTTP client. */
  protected readonly http = this.injector.get(HttpClient);

  /**
   * Creates the instance.
   * @param injector The Angular injector.
   */
  constructor(protected readonly injector: Injector) 
  {}

  /**
   * Get the resource (using HTTP GET).
   * @param resourcePath Path to the REST resource.
   * @param queryParams The parameters to pass in the query string.
   * @param headers The HTTP headers of the request.
   * @returns The request response value.
   */
  get<TValue>(resourcePath: string, queryParams?: URLSearchParams, headers?: HttpHeaders): Observable<TValue> {
    return this.http
      .get<TValue>(this.resolveApiUrl(resourcePath) + this.resolveQueryString(queryParams), { headers });
  }

  /**
   * Resolve the complete URL for a resource.
   * @param resourcePath A partial path to the resource excluding the server location.
   * @returns The URL of the API.
   */
  protected resolveApiUrl(resourcePath: string): string {
    return `${this.baseUrl}${resourcePath}`;
  }

  /**
   * Return a string for the provided parameters.
   * @param queryParams The url parameters.
   * @returns The query string.
   */
  protected resolveQueryString(queryParams?: URLSearchParams): string {
    if (queryParams && queryParams.toString().length > 0) {
      return '?' + queryParams.toString();
    } else {
      return '';
    }
  }
}