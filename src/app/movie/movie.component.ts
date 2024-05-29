import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('movieList') movieList!: ElementRef;

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
      error: (error) => console.log('Erro ao realizar um fetch dos filmes', error),
    });
  }

  logMovieId(id: number): void {
    console.log('Movie ID:', id);
  }

  scrollLeft(): void {
    this.movieList.nativeElement.scrollBy({
      left: -440,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.movieList.nativeElement.scrollBy({
      left: 440,
      behavior: 'smooth',
    });
  }

  trackByMovieId(index: number, movie: any): number {
    return movie.id;
  }
}
