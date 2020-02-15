import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/user/user.service';
import {MatDialogRef} from '@angular/material';
import {NationService} from '../../../shared/map/nation.service';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent implements OnInit {

  constructor(private service: NationService,
              public dialogRef: MatDialogRef<NationComponent>) { }

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
