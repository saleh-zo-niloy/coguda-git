import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: '../../style.scss',
})
export class TextInputComponent {
  @Input() label = '';

  inputValue = '';

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    console.log('Input value:', this.inputValue);
  }
}
