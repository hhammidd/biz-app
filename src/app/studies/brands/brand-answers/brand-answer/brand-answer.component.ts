import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {BrandAnswerService} from '../../../../shared/studies/brand/brand-answer.service';

@Component({
  selector: 'app-brand-answer',
  templateUrl: './brand-answer.component.html',
  styleUrls: ['./brand-answer.component.css']
})
export class BrandAnswerComponent implements OnInit {

  constructor(private service: BrandAnswerService,
              public dialogRef: MatDialogRef<BrandAnswerComponent>) {
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
