import { Component, OnInit } from '@angular/core';
import {SpmainService} from "./shared/spmain.service";

@Component({
  selector: 'app-spmains',
  templateUrl: './spmains.component.html',
  styleUrls: ['./spmains.component.css']
})
export class SpmainsComponent implements OnInit {

  constructor(private service: SpmainService) { }

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();

    this.service.initializeFormGroup();
  }

  onFilter() {
    if (this.service.form.value) {
      this.service.doSalePointFilter(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
