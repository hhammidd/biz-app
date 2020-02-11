import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {BrandQuestionService} from '../../../../shared/studies/brand/brand-question.service';

@Component({
  selector: 'app-brand-question',
  templateUrl: './brand-question.component.html',
  styleUrls: ['./brand-question.component.css']
})
export class BrandQuestionComponent implements OnInit {

  constructor(private service: BrandQuestionService,
              public dialogRef: MatDialogRef<BrandQuestionComponent>) {
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
