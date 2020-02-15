import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RegionService} from '../../../shared/map/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private service: RegionService,
              public dialogRef: MatDialogRef<RegionComponent>) {
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
