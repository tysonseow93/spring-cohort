import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../domains/character';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Character {
  avatar: string;
  birth_year: string;
  eye_color: string;
  force: number;
  gender: string;
  hair_color: string;
  height: number;
  id: string;
  img: string;
  mass: number;
  name: string;
  skin_color: string;

}
export interface CharacterId extends Character{
  id: string;
}

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  private characterList: AngularFirestoreCollection<Character>;
  character: Observable<CharacterId[]>;

  activeCharacter: Character;


  constructor(
        private characterService: CharacterService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        afs: AngularFirestore,
        public afAuth: AngularFireAuth
    ) {
    this.characterList = afs.collection<Character>('Products');
    this.character = this.characterList.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Character;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

    ngOnInit() {
      this.characterService
        .getCharacter(this.activatedRoute.snapshot.params['id'])
        .subscribe(character => this.activeCharacter = character );
    }

    back() {
      this.router.navigate(['/characters']);
    }

  save(character:CharacterId){
    this.characterList.doc(character.id).set(character);
  }

}
