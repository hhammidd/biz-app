import {Component, OnInit, ViewChild} from '@angular/core';
import {INation} from '../../../shared/map/nation';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RegionService} from '../../../shared/map/region.service';
import {RegionComponent} from '../region/region.component';
import {IRegionOld} from '../../../shared/map/regionold';

const ELEMENT_DATA: IRegionOld[] = [
  {region_id: 1, region_name: 'kit kat', region_code: 'NL'},
  {region_id: 2, region_name: 'kit kat', region_code: 'NL'},
  {region_id: 3, region_name: 'kit kat', region_code: 'NL'},
  {region_id: 4, region_name: 'kit kat', region_code: 'NL'}
];

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  constructor(private service: RegionService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['region_id', 'region_name', 'region_code', 'actions'];


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
    this.dialog.open(RegionComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(RegionComponent, dialogConfig);
  }

}
