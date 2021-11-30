import {Component, Injectable, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';

import {CountryappService} from './countryapp.service';
import {FormControl, FormGroup} from '@angular/forms';


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

  constructor(private cscService: CountryappService) { }

  ngOnInit(): void {
    this.cscService.getCountries().subscribe(
      data => this.countries = data
    );
    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl('')
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
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }
}
