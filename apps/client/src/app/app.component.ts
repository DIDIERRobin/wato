import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { NgIf } from "@angular/common";

@Component({
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterModule, NgIf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(state => !state);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
