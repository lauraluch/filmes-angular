import { Component } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MovieComponent,RouterOutlet],
})
export class AppComponent {
  title = 'Cine São Carlos';
}
