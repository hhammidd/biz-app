import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {INation} from '../shared/map/nation';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

import {IRegion} from '../shared/map/region';
import {IProvince} from "../shared/map/province";
import {ComuneConfig} from "../shared/map/comuneConfig.model";



@Injectable({
  providedIn: 'root'
})
export class CountryappService {

  private usersUrl: string;
  // private url: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8087';
    // this.usersUrl = '/assets/data/nations.json';
  }

  formData: INation;
  list: INation[];

  getCountries() {
    return this.http.get<INation[]>(this.usersUrl + '/nation-config').pipe(
      catchError(this.handleError)
    );
  }

  getRegioni(countryId: number) {
    return this.http.get<IRegion[]>(this.usersUrl + '/region-config/by-country/' + countryId).pipe(
      catchError(this.handleError)
    );
  }

  getProvince(regionId: number) {
    return this.http.get<IProvince[]>(this.usersUrl + '/province-config/by-region/' + regionId).pipe(
      catchError(this.handleError)
    );
  }

  getComuni(provinceId: number) {
    return this.http.get<ComuneConfig[]>(this.usersUrl + '/comune-config/by-province/1').pipe(
      catchError(this.handleError)
    );
  }





  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

  postComuneConfig(formData: INation) {
    return this.http.post<INation>(this.usersUrl + '/nation-config', formData);
  }

  refreshList() {
    console.log('ddd');
    this.http.get<INation[]>(this.usersUrl + '/nation-config')
      .toPromise().then(res => this.list = res as INation[]);
  }

  putComuneConfig(formData: INation) {
    return this.http.put(this.usersUrl + '/nation-config/' + formData.nationId, formData);

  }

  deleteComune(id: number) {
    return this.http.delete(this.usersUrl + '/nation-config/' + id);
  }
}
