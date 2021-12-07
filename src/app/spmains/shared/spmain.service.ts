import { Injectable } from '@angular/core';
import {FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {SalePointGeoWithCombineFilterTest} from '../SalePointGeoWithCombineFilterTest';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RegionsDto} from '../RegionsDto';
import {ComuneConfig} from '../../shared/map/comuneConfig.model';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ProvinceDto} from "../ProvinceDto";
import {ComuneDto} from "../ComuneDto";


@Injectable({
  providedIn: 'root'
})
export class SpmainService {

  region: RegionsDto;
  regionList: RegionsDto[] = [];

  // private GeoCombineTo: null;
  private usersUrl: string;
  private geoUrl: string;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // this.usersUrl = 'http://94.130.228.242:31430/';
    this.usersUrl = 'http://localhost:8085/';
    this.geoUrl = 'http://localhost:8089/';
  }

  // url_ = '/assets/data/regions.json';

  getRegions() {
    // return this.http.get<RegionsDto[]>(this.url_ );
     return this.http.get<RegionsDto[]>(this.geoUrl + '/region-config/names');
  }

  getProvinces() {
    // return this.http.get<RegionsDto[]>(this.url_ );
    return this.http.get<ProvinceDto[]>(this.geoUrl + '/province-config/names');
  }

  getComunes() {
    // return this.http.get<RegionsDto[]>(this.url_ );
    return this.http.get<ComuneDto[]>(this.geoUrl + '/comune-config/names');
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

  getRegionss() {
    return [
      { id: 1, item_text: 'Dehli' },
      { id: 2, item_text: 'Dehli1' },
      { id: 3, item_text: 'Dehli2' },
      { id: 4, item_text: 'Dehli3' },
      { id: 5, item_text: 'Dehli4' },
      { id: 6, item_text: 'Dehli5' },
    ];
  }
}

