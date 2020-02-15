import { Component, OnInit } from '@angular/core';
import {NationService} from '../../../shared/map/nation.service';
import {MatDialogRef} from '@angular/material';
import {ProvinceService} from '../../../shared/map/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  constructor(private service: ProvinceService,
              public dialogRef: MatDialogRef<ProvinceComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.service.form.value);
  }

  onClose() {
    //this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
