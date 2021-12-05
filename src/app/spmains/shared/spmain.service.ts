import { Injectable } from '@angular/core';
import {FormArray, FormArrayName, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {SalePointGeoWithCombineFilterTest} from '../SalePointGeoWithCombineFilterTest';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpmainService {


  // private GeoCombineTo: null;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    // this.usersUrl = 'http://94.130.228.242:31430/';
    this.usersUrl = 'http://localhost:8085/';
  }

  // geoCombineTo: FormGroup = new FormGroup({
  //   regions: new FormControl([1, 2]),
  //   provinces: new FormControl([3, 4, 5]),
  //   comunes: new FormControl([4, 5, 7]),
  // });


  regionsChoice = [
    { id: 3, value: 1},
    { id: 2, value: 2},
    { id: 3, value: 3}];

  private geoCombineTo = {};

  // containing objject from form
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    field: new FormControl('', Validators.required),
    market: new FormControl(''),
    // geoCombineTo: new FormControl(this.geoCombineTo),
    geoCombineTo: new FormGroup({
      regions: new FormControl(null),
      provinces: new FormControl(null),
      comunes: new FormControl(null),
      // regions: new FormArray([]),
      // provinces: new FormArray([]),
      // comunes: new FormArray([]),
    }),
  });




  initializeFormGroup() {
    this.form.setValue({
       $key: null,
      field: 'EV',
      market: 'Italy',
      geoCombineTo: {
         regions: [2811, 2816],
        provinces: [19775, 15969],
        comunes: [35993, 359934]
      },
    });
  }

  postComuneConfig(form: SalePointGeoWithCombineFilterTest) {
    console.log('url ', this.usersUrl + 'scombine-geo' )
    console.log('cooming from form', form);
    return this.http.post<SalePointGeoWithCombineFilterTest>(this.usersUrl + 'sale-point-geo/filter-sale-point-test', form)
      .subscribe();
  }
  // filterSalePoints(salePointGeoWithCombineFilter)
  doSalePointFilter(salePointGeoWithCombineFilterTest) {
    console.log('dofiletr', salePointGeoWithCombineFilterTest);
    this.postComuneConfig(salePointGeoWithCombineFilterTest);
  }
}
