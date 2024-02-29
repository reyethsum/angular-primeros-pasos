import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from './../interfaces/charater.interface';

@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  }];


  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

/*   onDeleteCharacter( index: number) {
    this.characters.splice(index,1);
  } */

  onDeleteCharacterById( id: string) {
    this.characters = this.characters.filter(Character => Character.id !== id);
  }

}
