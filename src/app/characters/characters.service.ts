import { Injectable } from '@angular/core';
import {Character} from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: Character[] = [
    {
      id: '1',
      name: 'Ricky',
      gender: 'Male'
    },
    {
      id: '2',
      name: 'Connie',
      gender: 'female'
    },
    {
      id: '3',
      name: 'Ethan',
      gender: 'Male'
    },
    {
      id: '4',
      name: 'MJ',
      gender: 'female'
    },
    {
      id: '5',
      name: 'Courtney',
      gender: 'Male'
    },
    {
      id: '6',
      name: 'Leon',
      gender: 'female'
    }
  ];
  constructor() { }

  getCharacterList() {
    // return a copy because of ref types
    return [...this.characters];
  }

  getCharacter(characterId: string) {

    return {
      ...this.characters.find(char => char.id === characterId)
    };
  }
}
