import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    offer_id: new FormControl('0001', Validators.required),
    title: new FormControl('', Validators.email),
    desc: new FormControl('', [Validators.required, Validators.minLength(8)]),
    condition: new FormControl(0),
    price_normal: new FormControl(0),
    price_discount: new FormControl(''),
    discount: new FormControl(0),
    supplier: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    url_link: new FormControl(''),
    url_video: new FormControl(''),
    activate: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      offer_id: '0001',
      title: '',
      desc: '',
      condition: '',
      price_normal: 0,
      price_discount: 0,
      discount: 0,
      supplier: '',
      startDate: '',
      endDate: '',
      url_link: '',
      url_video: '',
      activate: 0,
    });
  }
}
