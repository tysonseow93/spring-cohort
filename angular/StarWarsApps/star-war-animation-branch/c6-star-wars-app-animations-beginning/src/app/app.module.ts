import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ForceStrengthComponent } from './components/force-strength/force-strength.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        ForceStrengthComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "characters", component: CharacterListComponent },
            { path: "character/:id", component: CharacterDetailComponent }
        ])
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
