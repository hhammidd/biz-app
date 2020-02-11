import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BrandQuestionService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    brand_que_id: new FormControl(1),
    title: new FormControl(''),
    question: new FormControl(''),
    desc: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      brand_que_id: 1,
      title: '',
      question: '',
      desc: ''
    });
  }
}
