import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComuneService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    comune_id: new FormControl(0, Validators.required),
    comune_name: new FormControl(''),
    comune_code: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      comune_id: 1,
      comune_name: '',
      comune_code: '',
    });
  }
}
