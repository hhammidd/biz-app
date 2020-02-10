import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    permission_id: new FormControl(0, Validators.required),
    permission_name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      permission_id: 1,
      permission_name: '',
      description: ''
    });
  }
}
