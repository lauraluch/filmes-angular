import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.devlopment';

const apiURL = environment.apiURL;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getMovies() {
    return this.http.get(`${apiURL}?api_key=${apikey}`);
  }
}
