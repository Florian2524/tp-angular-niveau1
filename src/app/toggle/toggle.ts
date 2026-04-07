import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
})
export class Toggle {
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
