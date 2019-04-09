import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GolfApiService } from "./services/golf-api.service";
import { CoursesComponent } from './courses/courses.component';
import { HolesComponent } from './holes/holes.component';
import { DifficultiesComponent } from './difficulties/difficulties.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HolesComponent,
    DifficultiesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GolfApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
