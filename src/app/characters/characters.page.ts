import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit, OnDestroy {
  characters: Character[];
  private charactersSubs: Subscription;

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.characters = this.characterService.fetchCharacters();
    this.charactersSubs = this.characterService.charactersChanged.subscribe(characters => {
      this.characters = characters;
    });
  }

  ngOnDestroy() {
    this.charactersSubs.unsubscribe();
  }

}
