import {Component, OnInit, ViewChild} from '@angular/core';
import {IOffer} from '../../shared/offer/offer';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {OfferService} from '../../shared/offer/offer.service';
import {OfferComponent} from '../offer/offer.component';
import {NationService} from '../../shared/map/nation.service';


const ELEMENT_DATA: IOffer[] = [

  {
    offer_id: '2020FAR0001', title: 'kit kat', desc: 'the las call', condition: 'second hand', price_normal: 10,
    price_discount: 10, discount: 9, supplier: '01', startDate: '2020-12-01T12:00:00',
    endDate: '2020-12-01T12:00:00', url_link: '1234567865', url_video: '12', activate: 0
  },
  {
    offer_id: '2020FAR0001', title: 'hello man', desc: 'this is nice', condition: 'new', price_normal: 10,
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

  constructor(private service: NationService,
              private dialog: MatDialog) {
  }
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['offer_id', 'product_id', 'title', 'desc', 'condition', 'price_normal',
    'price_discount', 'discount', 'supplier', 'startDate', 'endDate', 'url_link', 'url_video', 'activate'
    , 'actions'];


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(OfferComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(OfferComponent, dialogConfig);
  }
}
