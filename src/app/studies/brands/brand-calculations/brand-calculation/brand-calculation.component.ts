import { Component, OnInit } from '@angular/core';
import {SalePointService} from '../../../../shared/sale-point.service';
import {MatDialogRef} from '@angular/material';
import {BrandCalculationsService} from '../../../../shared/studies/brand/brand-calculations.service';

@Component({
  selector: 'app-brand-calculation',
  templateUrl: './brand-calculation.component.html',
  styleUrls: ['./brand-calculation.component.css']
})
export class BrandCalculationComponent implements OnInit {

  constructor(private service: BrandCalculationsService,
              public dialogRef: MatDialogRef<BrandCalculationComponent>) { }

  ngOnInit() {
  }

  provonces = [
    { id: 3, value: 'Lambardia'},
    { id: 2, value: 'Puglia'},
    { id: 3, value: 'Emilia'}];

  comunes = [
    { id: 3, value: 'milan'},
    { id: 2, value: 'turin'},
    { id: 3, value: 'lecce'}];

  regions = [
    { id: 3, value: 'Milan'},
    { id: 2, value: 'Lecce'},
    { id: 3, value: 'Genova'}];

  onSubmit() {
    console.log(this.service.form.value);
  }

  onClose() {
    //this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
