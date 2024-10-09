import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
