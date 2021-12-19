import { Component, OnInit, ViewChild } from '@angular/core';
import {ISalepoint} from '../../shared/sale-point/salePoint';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {SalePointService} from '../../shared/sale-point.service';
import {SalePointComponent} from '../sale-point/sale-point.component';

const ELEMENT_DATA: ISalepoint[] = [
  {

    sp_id: '0001', field_code: '0001',
    name: 'M&T', geo_id: 1, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0002', field_code: '0001',
    name: 'M&T', geo_id: 2, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0003', field_code: '0001',
    name: 'M&T', geo_id: 3, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0004', field_code: '0001',
    name: 'M&T', geo_id: 5, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0001', field_code: '0001',
    name: 'M&T', geo_id: 4, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0001', field_code: '0001',
    name: 'M&T', geo_id: 4, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0001', field_code: '0001',
    name: 'M&T', geo_id: 4, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  },
  {
    sp_id: '0001', field_code: '0001',
    name: 'M&T', geo_id: 6, cap: '00001', comune: '0001', province: '001',
    region: '01', tel: '123456776543', potential: 12, address: '1234567865'
  }
  ];

@Component({
  selector: 'app-sale-point-list',
  templateUrl: './sale-point-list.component.html',
  styleUrls: ['./sale-point-list.component.css']
})
export class SalePointListComponent implements OnInit {


  constructor(private service: SalePointService,
              private dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey: string;

  displayedColumns: string[] = [ 'sp_id', 'field_code', 'name', 'geo_id',
    'cap', 'comune', 'province', 'region', 'tel', 'potential', 'address', 'actions'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter("");
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
    this.dialog.open(SalePointComponent, dialogConfig);
  }

  onEdit(row){
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(SalePointComponent, dialogConfig);
  }

}
