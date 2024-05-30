import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];
