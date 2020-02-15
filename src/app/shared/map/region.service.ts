import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    region_id: new FormControl(0, Validators.required),
    region_name: new FormControl(''),
    region_code: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      region_id: 1,
      region_name: '',
      region_code: '',
    });
  }
}
