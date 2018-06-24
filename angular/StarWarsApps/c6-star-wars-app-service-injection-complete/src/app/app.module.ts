import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ForceStrengthComponent } from './components/force-strength/force-strength.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailGuard } from  './services/character-guards.service'


@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        ForceStrengthComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        CharacterService,
        CharacterDetailGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
