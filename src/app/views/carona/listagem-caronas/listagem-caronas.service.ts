import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaronaService {
  private url = 'http://localhost:3001/caronas';
  constructor(private http: HttpClient) {}

  getListaCaronas() {
    return this.http.get(this.url);
  }
  salvarCarona(obj: any) {
    return this.http.post(this.url, obj);
  }
}
