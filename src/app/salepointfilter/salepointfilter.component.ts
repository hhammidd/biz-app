import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SalepointfolterService} from "./salepointfolter.service";

@Component({
  selector: 'app-salepointfilter',
  templateUrl: './salepointfilter.component.html',
  styleUrls: ['./salepointfilter.component.css']
})
export class SalepointfilterComponent implements OnInit {

  // version test
  // constructor(private http: HttpClient) { }
  //
  // ngOnInit(): void {
  //   this.callApi();
  // }

  // callApi() {
  //   this.http.get('/assets/data/salepoints.json').subscribe(res => {
  //     console.log(res);
  //   })
  // }

  countries: any;
  states: any;
  selectedCountry: any = {id: 0, name: ''}

  constructor(private salepointFilterService: SalepointfolterService) { }

  ngOnInit(): void {
    this.showAll();
    this.onSelect(this.selectedCountry.id);
  }


  showAll() {
    this.salepointFilterService.getAll().subscribe(
      (data: any) => {
        this.countries = data,
          console.log(this.countries);
      }
    );
  }

  onSelect(country_id: any) {
    this.salepointFilterService.getAll().subscribe((res: any) => {
        this.states = res.states.filter(
          (res: any)=> res.country_id == country_id!.value
        ),
          console.log(this.states);
      });
  }

}
