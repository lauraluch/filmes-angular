import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieComponent implements OnInit {
  movies: any = [];
  squares: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.calculateSquares();
  }

  calculateSquares() {
    const movieListWidth = 1000;
    const squareSize = 52;
    const numberOfSquares = Math.floor(movieListWidth / squareSize);
    this.squares = Array(numberOfSquares).fill(0);
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
