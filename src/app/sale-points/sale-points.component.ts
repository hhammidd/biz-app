import { Component, OnInit } from '@angular/core';
import {SalePointService} from '../shared/sale-point.service';

@Component({
  selector: 'app-sale-points',
  templateUrl: './sale-points.component.html',
  styleUrls: ['./sale-points.component.css']
})
export class SalePointsComponent implements OnInit {

  constructor(private service: SalePointService) { }

  ngOnInit() {
  }

}
