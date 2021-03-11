import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipes } from '../recipes';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  createrecipe(recipe): Observable<Recipes> {
    return this.http.post<Recipes>(
      this.url,
      JSON.stringify(recipe),
      this.httpOptions
    );
  }

  getRecipeById(recipeid): Observable<Recipes> {
    return this.http.get<Recipes>(this.url + '/' + recipeid);
  }
}
