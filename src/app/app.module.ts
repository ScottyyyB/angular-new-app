import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoSuggestionsComponent } from './video-suggestions/video-suggestions.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoSuggestionsComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
