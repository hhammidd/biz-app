import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {RegionsDto} from '../RegionsDto';
import {ProvinceDto} from '../ProvinceDto';
import {ComuneDto} from '../ComuneDto';
// import {SalePointGeoBeta} from '../SalePointGeoBeta';


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

