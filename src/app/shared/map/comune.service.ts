import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComuneService {

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    comuneId: new FormControl(0, Validators.required),
    comuneName: new FormControl(''),
    comuneCode: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      comuneId: 1,
      comuneName: '',
      comuneCode: '',
    });

  }
}
