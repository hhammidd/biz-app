import { Component, OnInit } from '@angular/core';
import {SalePointService} from '../../shared/sale-point.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.css']
})
export class SalePointComponent implements OnInit {

  constructor(private service: SalePointService,
              public dialogRef: MatDialogRef<SalePointComponent>) { }

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

}
