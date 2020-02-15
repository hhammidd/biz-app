import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    nation_id: new FormControl(0, Validators.required),
    nation_name: new FormControl(''),
    nation_code: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      nation_id: 1,
      nation_name: '',
      nation_code: '',
    });
  }
}
