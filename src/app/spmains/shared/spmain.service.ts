import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {RegionsDto} from '../RegionsDto';
import {ProvinceDto} from '../ProvinceDto';
import {ComuneDto} from '../ComuneDto';

import {SalePointGeoBeta} from '../SalePointGeoBeta';
// import {SalePointGeoBeta} from '../SalePointGeoBeta';


@Injectable({
  providedIn: 'root'
})
export class SpmainService {

  region: RegionsDto;
  regionList: RegionsDto[] = [];

  salePointGeoBeta; SalePointGeoBeta;

  // private GeoCombineTo: null;
  private usersUrl: string;
  private geoUrl: string;

  constructor(private http: HttpClient) {
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


  salePointsOnGeo(formData: SalePointGeoBeta) {
    console.log('form data filter : ', formData);
    console.log('URL : ', this.usersUrl + 'sale-point-geo/combine-geo-beta');
    return this.http.post<SalePointGeoBeta>(this.usersUrl + 'sale-point-geo/combine-geo-beta', formData).subscribe();
  }
}

