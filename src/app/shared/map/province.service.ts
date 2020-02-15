import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    province_id: new FormControl(0, Validators.required),
    province_name: new FormControl(''),
    province_code: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      province_id: 1,
      province_name: '',
      province_code: '',
    });
  }
}
