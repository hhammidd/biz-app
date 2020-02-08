import { Component, OnInit } from '@angular/core';
import {SalePointService} from '../../shared/sale-point.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.css']
})
export class SalePointComponent implements OnInit {

  constructor(private service: SalePointService,
              public dialogRef: MatDialogRef<SalePointComponent>) { }

  ngOnInit() {
  }

}
