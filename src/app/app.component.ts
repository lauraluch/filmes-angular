import { Component } from '@angular/core';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MovieComponent],
})
export class AppComponent {
  title = 'myApp';
}
