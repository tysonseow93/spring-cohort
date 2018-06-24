import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GiphyListComponent } from './components/giphy-list/giphy-list.component';

import {GiphyService} from "./services/giphy.service";


@NgModule({
  declarations: [
    AppComponent,
    GiphyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
