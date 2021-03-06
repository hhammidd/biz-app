import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegionsDto} from '../RegionsDto';
import {ProvinceDto} from '../ProvinceDto';
import {ComuneDto} from '../ComuneDto';
import {SalePointsInfoTo} from '../SalePointsInfoTo';
import {Observable} from 'rxjs';
import {SalePointTo} from "../SalePointTo";
import {IComune} from "../../shared/map/comune";
import {MatTableDataSource} from "@angular/material";
import {ICap} from "../../shared/map/cap";



@Injectable({
  providedIn: 'root'
})
export class SpmainService {

  region: RegionsDto;
  regionList: RegionsDto[] = [];

  salePointTos: SalePointTo[];

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


  salePointsOnGeo(formData: SalePointsInfoTo) {
    console.log('form data filter : ', formData);
    console.log('URL : ', this.usersUrl + 'sale-point-geo/combine-geo-beta');

    return this.http.post<SalePointsInfoTo>(this.usersUrl + 'sale-point-geo/filter-sale-point-test', formData)
      .subscribe( data => {
        console.log('data from backend: ' , data);
        this.salePointTos = data.salePointTos as SalePointTo[];
        console.log('data after map: ', this.salePointTos);
      });
  }
}

