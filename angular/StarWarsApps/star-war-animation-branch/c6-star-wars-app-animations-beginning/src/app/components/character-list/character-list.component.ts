import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CharacterService } from '../../services/character.service';

import { Character } from '../../domains/character';

@Component({
    selector: 'character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
    characters: Character[];
    // Use filterCharacters for template binding in sidenav
    filteredCharacters: Character[];
    characterFC = new FormControl('');
    hideDetails = false;

    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(characters => {
            this.characters = characters;
            this.filteredCharacters = characters;
        });

        this.characterFC.valueChanges.subscribe(value => {
            if (!value) {
                this.filteredCharacters = this.characters;
                return;
            }

            this.filteredCharacters = this.characters.filter(character => {
                return character.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
            });
        });
    }

    hideDetailsFn() {
        this.hideDetails = !this.hideDetails;
    }

    logSomething(char: Character) {
        console.log('character: ' + char.name);
        console.log('hair color: ' + char.hair_color);
    }

}
