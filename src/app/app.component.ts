import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SandboxComponent } from "./sandbox/sandbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SandboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'animejs-sandbox';
}
