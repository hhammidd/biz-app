import {Component, OnInit} from '@angular/core';
import {IOffer} from '../../shared/offer/offer';
import {MatDialog, MatDialogConfig, MatTableDataSource} from '@angular/material';
import {OfferService} from '../../shared/offer/offer.service';
import {OfferComponent} from '../offer/offer.component';

const ELEMENT_DATA: IOffer[] = [
  {
    offer_id: '2020FAR0001', product_id: '000001', title: 'kit kat', desc: 'the las call', condition: 'second hand', price_normal: 10,
    price_discount: 10, discount: 9, supplier: '01', startDate: '2020-12-01T12:00:00',
    endDate: '2020-12-01T12:00:00', url_link: '1234567865', url_video: '12', activate: 0
  },
  {
    offer_id: '2020FAR0001', product_id: '000002', title: 'hello man', desc: 'this is nice', condition: 'new', price_normal: 10,
    price_discount: 10, discount: 9, supplier: '01', startDate: '2020-12-01T12:00:00',
    endDate: '2020-12-01T12:00:00', url_link: '1234567865', url_video: '12', activate: 0
  },
  {
    offer_id: '2020FAR0001', product_id: '000003', title: 'hgghh', desc: 'M&T', condition: 'not bad', price_normal: 10,
    price_discount: 10, discount: 9, supplier: '01', startDate: '2020-12-01T12:00:00',
    endDate: '2020-12-01T12:00:00', url_link: '1234567865', url_video: '12', activate: 0
  }
];

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  constructor(private service: OfferService,
              private dialog: MatDialog) {
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['offer_id', 'product_id', 'title', 'desc', 'condition', 'price_normal',
    'price_discount', 'discount', 'supplier', 'startDate', 'endDate', 'url_link', 'url_video', 'activate'
  , 'actions'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(OfferComponent, dialogConfig);
  }

}
