import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkboxText = 'I agree';
  enableButton = false;

  onChange(element: HTMLInputElement) {
    this.enableButton = element.checked;
  }
}
