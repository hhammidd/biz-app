import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    role_id: new FormControl(0, Validators.required),
    role_name: new FormControl('', Validators.email),
    company_id: new FormControl(0),
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      role_id: 1,
      role_name:'',
      company_id: 0,
    });
  }
}
