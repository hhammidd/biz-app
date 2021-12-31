import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PriceInfoService} from '../../../shared/buyinghouse/price-info.service';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.css']
})
export class PriceInfoComponent implements OnInit {

  constructor(private service: PriceInfoService) {
  }

  energyLevels = [
    {id: 1, value: 'A'},
    {id: 2, value: 'B'},
    {id: 3, value: 'C'},
    {id: 4, value: 'D'},
    {id: 5, value: 'E'},
    {id: 6, value: 'F'},
    {id: 7, value: 'G'},
    {id: 8, value: 'H'}];

  homeTypes = [
    {id: 1, value: 'APARTMENT'},
    {id: 2, value: 'HOUSE'},
    {id: 2, value: 'OTHERS'}];

  years = [
    {id: 2020, value: 'New apartment 2020'},
    {id: 2018, value: 'After 2015'},
    {id: 2013, value: '2010 to 2015'},
    {id: 2008, value: '2005 to 2010'},
    {id: 2003, value: '2000 to 2005'},
    {id: 1998, value: '1995 to 2000'},
    {id: 1993, value: '1990 to 1995'},
    {id: 1985, value: '1980 to 1990'},
    {id: 1975, value: '1970 to 1980'},
    {id: 1965, value: '1960 to 1970'},
    {id: 1955, value: '1950 to 1960'},
    {id: 1945, value: '1940 to 1950'},
    {id: 1935, value: '1930 to 1940'},
    {id: 1925, value: '1920 to 1930'}
    ];


  ngOnInit() {
    this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   this.service.formData = {
  //     id: null,
  //     address: '',
  //     cityPostalcode: '',
  //     postalcode: '',
  //     city: '',
  //     daysOnMarket: 0,
  //     dateInMarket: '',
  //     energy: '',
  //     floor: 0,
  //     homeType: '',
  //     livingAreaMeter: 0,
  //     meter: 0,
  //     price: 0,
  //     pricePermeter: 0,
  //     constructionYear: 0
  //   };
  // }

  onSubmit(form: NgForm) {
    if (form.value.ComuneId == null) {
      this.insertRecord(form);
    } else {
    }
  }

  insertRecord(form: NgForm) {
    this.service.postComuneConfig(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  // updateRecord(form: NgForm) {
  //     this.service.putComuneConfig(form.value).subscribe(res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //     });
  //
  // }


}
