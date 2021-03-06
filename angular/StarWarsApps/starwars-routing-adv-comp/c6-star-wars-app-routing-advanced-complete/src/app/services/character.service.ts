import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../domains/character';
import {AngularFireDatabase} from "angularfire2/database";


@Injectable()
export class CharacterService {
    activeCharacter = new BehaviorSubject<Character>(null);

    constructor(
        private http: HttpClient,
        private fb: AngularFireDatabase
    ) { }

    getCharacters(): Observable<Character[]> {
        // return this.http.get<Character[]>('assets/api/characters.json');
        return this.fb.list<Character>('characters').valueChanges();
    }

    getFilmName(url: string): Observable<any> {
        console.log(url);
        return this.http.get(url);
    }

    getCharacter(id: string): Observable<Character> {
      return this.getCharacters().pipe(map((characters: Character[]) => {
        return characters.find((character: Character) => character.id == id)
      }));
    }

}
