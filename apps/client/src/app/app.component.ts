import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { iTask } from "@wato/models";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    const task: iTask = {
      id: 42
    }
  }
}
