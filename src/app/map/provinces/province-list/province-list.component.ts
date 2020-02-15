import {Component, OnInit, ViewChild} from '@angular/core';
import {INation} from '../../../shared/map/nation';
import {RegionService} from '../../../shared/map/region.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RegionComponent} from '../../regions/region/region.component';
import {ProvinceComponent} from '../province/province.component';
import {IProvince} from '../../../shared/map/province';

const ELEMENT_DATA: IProvince[] = [
  {province_id: 1, province_name: 'kit kat', province_code: 'NL'},
  {province_id: 2, province_name: 'kit kat', province_code: 'NL'},
  {province_id: 3, province_name: 'kit kat', province_code: 'NL'},
  {province_id: 4, province_name: 'kit kat', province_code: 'NL'}
];

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {

  constructor(private service: RegionService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['province_id', 'province_name', 'province_code', 'actions'];


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
    this.dialog.open(ProvinceComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProvinceComponent, dialogConfig);
  }

}
