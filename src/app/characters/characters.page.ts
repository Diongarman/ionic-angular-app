import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Character[];

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.characters = this.characterService.fetchCharacters();

  }

}
