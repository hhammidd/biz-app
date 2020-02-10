import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {PermissionService} from '../../../shared/permission/permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  constructor(private service: PermissionService,
              public dialogRef: MatDialogRef<PermissionComponent>) {
  }

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
