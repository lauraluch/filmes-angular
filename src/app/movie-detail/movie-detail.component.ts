import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.loadMovieDetails(movieId);
      }
    });
  }

  loadMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe({
      next: (res: any) => {
        this.movie = res;
        console.log(this.movie);
      },
      error: (error) => console.log('Erro ao carregar detalhes do filme', error),
    });
  }
}
