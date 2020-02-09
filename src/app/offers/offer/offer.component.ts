import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../shared/offer/offer.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private service: OfferService,
              public dialogRef: MatDialogRef<OfferComponent>) { }

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
