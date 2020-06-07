import {Component, OnInit} from '@angular/core';
import {PriceInfoService} from '../../../shared/buyinghouse/price-info.service';

@Component({
  selector: 'app-price-info-list',
  templateUrl: './price-info-list.component.html',
  styleUrls: ['./price-info-list.component.css']
})
export class PriceInfoListComponent implements OnInit {

  constructor(private service: PriceInfoService) {
  }

  ngOnInit() {
    this.service.refreshList();
  }

}
