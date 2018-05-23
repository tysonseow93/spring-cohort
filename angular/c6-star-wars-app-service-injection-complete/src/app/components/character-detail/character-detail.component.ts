import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../services/character.service';

import { Character } from '../../domains/character';

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    activeCharacter: Character;

    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit() {
        this.characterService.activeCharacter.subscribe(activeCharacter => {
            this.activeCharacter = activeCharacter;
        });
    }

}
