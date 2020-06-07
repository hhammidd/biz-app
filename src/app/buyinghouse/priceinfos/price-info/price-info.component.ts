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


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      address: '',
      cityPostalcode: '',
      daysOnMarket: 0,
      energy: '',
      floor: 0,
      homeType: '',
      livingAreaMeter: 0,
      meter: 0,
      price: 0,
      year: 0
    };
  }

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
