import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BrandMicroService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    brand_id: new FormControl(1),
    brand_name: new FormControl(''),
    sp_for_brand: new FormControl(1),
    sp_potentialsp_for_brand_percentage: new FormControl(1),//4
    sp_potential: new FormControl(1),
    sp_brand_total_territory: new FormControl(1),
    brand_potential: new FormControl(1),
    brand_per_sp_percentage: new FormControl(1),
    brand_efficency: new FormControl(1),
    value_eeficency: new FormControl(1) //10
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      brand_id: 1,
      brand_name: '',
      sp_for_brand: '',
      sp_potentialsp_for_brand_percentage: 1,//4
      sp_potential: 1,
      sp_brand_total_territory: 1 ,
      brand_potential: 1,
      brand_per_sp_percentage: 1 ,
      brand_efficency: 1 ,
      value_eeficency: 1 //10
    });
  }
}
