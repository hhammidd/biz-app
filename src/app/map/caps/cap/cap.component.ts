import { Component, OnInit } from '@angular/core';
import {ComuneService} from '../../../shared/map/comune.service';
import {MatDialogRef} from '@angular/material';
import {CapService} from '../../../shared/map/cap.service';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.css']
})
export class CapComponent implements OnInit {

  constructor(private service: CapService,
              public dialogRef: MatDialogRef<CapComponent>) { }

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
