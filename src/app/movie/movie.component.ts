import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink],
})
export class MovieComponent implements OnInit {
  movies: any = [];
  nextReleases: any = [];
  squares: any[] = [];

  @ViewChild('movieList') movieList!: ElementRef;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
    this.loadNextReleases();
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

  loadNextReleases() {
    this.movieService.getNextReleases().subscribe({
      next: (res: any) => {
        this.nextReleases = res.results;
        console.log(this.nextReleases);
      },
      error: (error) => console.log('Erro ao realizar um fetch dos filmes', error),
    });
  }

  logMovieId(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  scrollLeft(): void {
    this.movieList.nativeElement.scrollBy({
      left: -240, // Altere o valor conforme necessário
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.movieList.nativeElement.scrollBy({
      left: 240, // Altere o valor conforme necessário
      behavior: 'smooth',
    });
  }

  trackByMovieId(index: number, movie: any): number {
    return movie.id;
  }
}
