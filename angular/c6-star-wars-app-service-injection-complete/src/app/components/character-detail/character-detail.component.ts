import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../services/character.service';

import { Character } from '../../domains/character';

import { ActivatedRoute } from '@angular/router';

import {Router} from "@angular/router";


@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    activeCharacter: Character;
    pageTitle;

    constructor(
        private activatedRoute : ActivatedRoute,
        private characterService: CharacterService,
        private router: Router
    ) { }

    onBack(): void {
      this.router.navigate(['/character-list']);
    }

    ngOnInit() {
        this.characterService.activeCharacter.subscribe(activeCharacter => {
            this.activeCharacter = activeCharacter;
            this.pageTitle = this.activatedRoute.snapshot.params['id'];

        });
    }


}
