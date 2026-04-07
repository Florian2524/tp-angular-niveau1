import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Image } from './image/image';
import { Counter } from './counter/counter';
import { Input } from './input/input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Image, Counter, Input],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-angular-niveau1');
}
