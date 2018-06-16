import { Injectable } from '@angular/core';
import {CanActivate, Route} from '@angular/router';

@Injectable()
export class CharacterDetailGuard implements CanActivate {
  canActivate() : any {}
}
