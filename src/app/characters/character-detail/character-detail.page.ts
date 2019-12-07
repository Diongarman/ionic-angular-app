import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  loadedCharacter: Character;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit() {
    // activatedRoute is an 'observable'
    // an observable is an object you can 'subscribe' to to get data
    // Find out more
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('characterId')) {
        // redirect
        return;
      }
      const charId = paramMap.get('characterId');
      this.loadedCharacter = this.characterService.getCharacter(charId)
      
    })
  }

}
