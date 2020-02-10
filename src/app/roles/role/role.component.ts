import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RoleService} from '../../shared/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private service: RoleService,
              public dialogRef: MatDialogRef<RoleComponent>) {
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
