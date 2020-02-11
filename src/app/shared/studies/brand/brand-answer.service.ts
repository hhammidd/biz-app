import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BrandAnswerService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    brand_ans_id: new FormControl(1),
    title: new FormControl(''),
    ins_data: new FormControl(''),
    upd_data: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      brand_ans_id: 1,
      title: '',
      ins_data: '',
      upd_data: ''
    });
  }
}
