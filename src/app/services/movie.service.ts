import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.devlopment';
import { Observable } from 'rxjs';

const apiURL = environment.apiURL;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getMovies() {
    return this.http.get(`${apiURL}discover/movie?api_key=${apikey}&language=pt-Br`);
  }

  getNextReleases() {
    return this.http.get(`${apiURL}/movie/upcoming?api_key=${apikey}&language=pt-Br`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${apiURL}movie/${id}?api_key=${apikey}&language=pt-Br`);
  }
}
