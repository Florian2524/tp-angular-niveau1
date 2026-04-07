import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Image } from './image/image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Image],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-angular-niveau1');
}
