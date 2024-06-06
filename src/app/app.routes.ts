import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

export const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  {path: 'buy', component: BuyTicketComponent}
];
