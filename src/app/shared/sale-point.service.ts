import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SalePointService {


  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    sp_id: new FormControl('0001', Validators.required),
    field_code: new FormControl('', Validators.email),
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    geo_id: new FormControl(0),
    cap: new FormControl('0001'),
    comune: new FormControl(''),
    province: new FormControl(''),
    region: new FormControl(''),
    tel: new FormControl(''),
    potential: new FormControl(''),
    address: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      sp_id: '0001',
      field_code: '',
      name: '',
      geo_id: 0,
      cap: '',
      comune: '',
      province: '',
      region: '',
      tel: '',
      potential: 0,
      address: '',
    });
  }
}
