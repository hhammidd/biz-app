import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ComuneService} from '../../../shared/map/comune.service';

@Component({
  selector: 'app-comune',
  templateUrl: './comune.component.html',
  styleUrls: ['./comune.component.css']
})
export class ComuneComponent implements OnInit {

  constructor(private service: ComuneService,
              public dialogRef: MatDialogRef<ComuneComponent>) { }

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
