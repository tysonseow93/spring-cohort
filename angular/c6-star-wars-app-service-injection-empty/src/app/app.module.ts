import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { ForceStrengthComponent } from './components/force-strength/force-strength.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        ForceStrengthComponent,
        CharacterDetailComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
