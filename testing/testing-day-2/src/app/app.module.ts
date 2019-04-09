import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringUtilService } from '../services/StringUtil.service';
import { MathUtilService } from '../services/MathUtil.service';
import { MathUtilsComponent } from '../components/math-utils/math-utils.component'
import { StringUtilsComponent } from '../components/string-utils/string-utils.component'

@NgModule({
  declarations: [
    AppComponent,
    MathUtilsComponent,
    StringUtilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StringUtilService,
    MathUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
