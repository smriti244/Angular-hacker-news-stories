import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { HttpProxy } from './services/http-proxy';
import { StoryApi } from './services/story-api.service';
import { StoryService } from './services/story.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule
  ],
  providers: [HttpProxy, StoryApi, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
