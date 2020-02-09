import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    id_utente: new FormControl(0, Validators.required),
    nome_utente: new FormControl('', Validators.email),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
    company_id: new FormControl(0),
    role_id: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      id_utente: 1,
      nome_utente: '',
      pwd: '',
      company_id: 0,
      role_id: 0,
    });
  }
}
