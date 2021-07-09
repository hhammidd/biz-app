import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FieldService} from "./fieldComponent/field.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-field-component',
  templateUrl: './field-component.component.html',
  styleUrls: ['./field-component.component.css']
})
export class FieldComponentComponent implements OnInit {

  constructor(private service: FieldService,
              public dialogRef: MatDialogRef<FieldComponentComponent>) {
  }

  ngOnInit() {
  }

  fields = [
    {id: 3, value: 'Electrical Vehicle'},
    {id: 2, value: 'Automation Engineering'},
    {id: 2, value: 'Salon'},
    {id: 3, value: 'Farmacy'}];

  countries = [
    {id: 3, value: 'Italy'},
    {id: 2, value: 'Netherlands'},
    {id: 2, value: 'Germany'},
    {id: 2, value: 'Austria'},
    {id: 3, value: 'Belgium'}];

  provonces = [
    {id: 3, value: 'Lambardia'},
    {id: 2, value: 'Puglia'},
    {id: 3, value: 'Emilia'}];

  comunes = [
    {id: 3, value: 'milan'},
    {id: 2, value: 'turin'},
    {id: 3, value: 'lecce'}];

  regions = [
    {id: 3, value: 'Milan'},
    {id: 2, value: 'Lecce'},
    {id: 3, value: 'Genova'}];

  onSubmit() {
     console.log(this.service.form.value);
     this.insertRecord(this.service.form.value);
  }

  insertRecord(value: any) {
    this.service.postComuneConfig(value);
  }


  onClose() {
    //this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
