import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock

    product_id: new FormControl(0, Validators.required),
    product_name: new FormControl(''),
    description: new FormControl(''),
    supplier_id: new FormControl(0),
    unit_in_stock: new FormControl(0),
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      product_id: 1,
      product_name: '',
      description: '',
      supplier_id: 1,
      unit_in_stock: 1
    });
  }
}
