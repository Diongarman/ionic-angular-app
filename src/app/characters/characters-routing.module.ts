import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
  },
  {
    path: ':characterId',
    loadChildren: () => import('./character-detail/character-detail.module').then( m => m.CharacterDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
