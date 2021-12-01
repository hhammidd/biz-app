import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalepointfolterService {

  constructor(private http: HttpClient) {}

  url_ = '/assets/data/nations.json';

  getAll(): any {
    return this.http.get<any>(this.url_);
  }

}
