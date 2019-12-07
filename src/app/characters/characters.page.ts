import { Component, OnInit } from '@angular/core';

import { Character } from './character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Character[] = [
    {
      name: 'Ricky',
      gender: 'Male'
    },
    {
      name: 'Connie',
      gender: 'female'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
