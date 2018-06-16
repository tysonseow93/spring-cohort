import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { CharacterService } from '../../services/character.service';

import { Character } from '../../domains/character';
import {st} from "@angular/core/src/render3";

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
    animations: [
      trigger('fade', [
        state('inactive', style({opacity: 0})),
        state('active', style({opacity: 1, backgroundColor: '#3748AC', color: 'white'})),
        transition('inactive <=> active', [animate(500)])
      ]),
      trigger('addFriend',[
        transition('void => *', [style({transform: 'translateX(100%)'}), animate(500)]),
      ])
    ]
})
export class CharacterDetailComponent implements OnInit {
    // *** Today's Goal ***

    // #1 Create an animation to fade in additional detail div

    // #2 Create an animation to have an added friend slide in from right to left

    // #3 Create an animation to zoom in on a subset of details

    // #4 Create keyframes to transition background color


    activeCharacter : Character;
    additionalDetailState = 'inactive';
    currentFriend : string = null;
    friends = [];

    constructor(
        private characterService: CharacterService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
      this.characterService
        .getCharacter(this.activatedRoute.snapshot.params['id'])
        .subscribe(character => this.activeCharacter = character );
    }

    back() {
      this.router.navigate(['/characters']);
    }

    changeAdditionalDetailState(){
      if(this.additionalDetailState === 'inactive'){
        this.additionalDetailState = 'active';
      } else {
        this.additionalDetailState = 'inactive'
      }
      console.log(this.additionalDetailState);
    }

    addFriend(){
      if(this.currentFriend !== null){
        this.friends.push(this.currentFriend);
        this.currentFriend === null;
      }
    }

}
