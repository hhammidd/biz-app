import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FieldComponentComponent} from "./field-component/field-component.component";
import {FieldService} from "./field-component/fieldComponent/field.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private service: FieldService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(FieldComponentComponent, dialogConfig);
  }

  onSubmit() {
    console.log(this.service.form.value);
  }

  onClose() {
    //this.service.form.reset();
    this.service.initializeFormGroup();
    // this.dialogRef.close();
  }

}
