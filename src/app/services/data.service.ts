import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime, animes } from '../../assets/classes/anime';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRules(): Observable<any> {
    return this.http.get('/assets/jsons/rules.json');
  }

  getErrors(): Observable<any> {
    return this.http.get('/assets/jsons/errores.json');
  }
}
