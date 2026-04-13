import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Image } from './image/image';
import { Counter } from './counter/counter';
import { Input } from './input/input';
import { List } from './list/list';
import { Toggle } from './toggle/toggle';
import { Data } from './data/data';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'exercice1', pathMatch: 'full' },
  { path: 'exercice1', component: Welcome },
  { path: 'exercice2', component: Image },
  { path: 'exercice3', component: Counter },
  { path: 'exercice4', component: Input },
  { path: 'exercice5', component: List },
  { path: 'exercice6', component: Toggle },
  { path: 'exercice7', component: Data },
  { path: '**', component: NotFound }
];
