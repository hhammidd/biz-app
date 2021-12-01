import {Component, OnInit} from '@angular/core';

import {CountryappService} from './countryapp.service';
import {FormControl, FormGroup} from '@angular/forms';
import {log} from "util";


@Component({
  selector: 'app-countryapp',
  templateUrl: './countryapp.component.html',
  styleUrls: ['./countryapp.component.css'],
})
export class CountryappComponent implements OnInit {

  createAccountForm: FormGroup;
  countries: {};
  states: {};
  cities: {};
  comuni: {};

  constructor(private cscService: CountryappService) { }

  ngOnInit(): void {
    this.cscService.getCountries().subscribe(
      data => this.countries = data
    );
    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      comune: new FormControl(''),
    });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.cscService.getRegioni(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.cscService.getProvince(stateId).subscribe(
        data => {
          this.cities = data;
          this.comuni = null;
        }
      );
    } else {
      this.cities = null;
      this.comuni = null;
    }
  }

  onChangeCity(provinceId: number) {
    if (provinceId) {
      this.cscService.getComuni(provinceId).subscribe(
        data => this.comuni = data
      );
    } else {
      this.comuni = null;
    }
  }
}
