import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
})
export class MovieComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res.results;
        console.log(this.movies);
      },
      error: (error) =>
        console.log('Erro ao realizar um fetch dos filmes', error),
    });
  }
}
