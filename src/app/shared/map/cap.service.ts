import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CapService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    cap_id: new FormControl(0, Validators.required),
    cap_name: new FormControl(''),
    cap_code: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      cap_id: 1,
      cap_name: '',
      cap_code: '',
    });
  }
}
