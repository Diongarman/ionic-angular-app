import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private characters: Character[];
  constructor(private http: HttpClient) {}

  fetchCharacters() {
    this.http.get<any>('https://swapi.co/api/people/?format=json')
      .pipe(map(resData => {
        return resData.results.map((character, index) => {
          return {
            id: index,
            name: character.name,
            gender: character.gender
          };
        });
      }))
      .subscribe(transformedData => {
      this.characters = [...transformedData];
    });

    return this.characters;
  }
  getCharacterList() {
    // return a copy because of ref types
    return [...this.characters];
  }

  getCharacter(characterId: string) {

    return {
      ...this.characters[characterId]
    };
  }
}
