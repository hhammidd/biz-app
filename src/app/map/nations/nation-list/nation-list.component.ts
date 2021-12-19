import {Component, OnInit, ViewChild} from '@angular/core';
import {INation} from '../../../shared/map/nation';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NationComponent} from '../nation/nation.component';
import {NationService} from '../../../shared/map/nation.service';
import {INationOld} from "../../../shared/map/nationold";

const ELEMENT_DATA: INationOld[] = [
  {nation_id: 1, nation_name: 'kit kat', nation_code: 'NL'},
  {nation_id: 2, nation_name: 'kit kat', nation_code: 'NL'},
  {nation_id: 3, nation_name: 'kit kat', nation_code: 'NL'},
  {nation_id: 4, nation_name: 'kit kat', nation_code: 'NL'},
];

@Component({
  selector: 'app-nation-list',
  templateUrl: './nation-list.component.html',
  styleUrls: ['./nation-list.component.css']
})
export class NationListComponent implements OnInit {

  constructor(private service: NationService,
              private dialog: MatDialog) {
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['nation_id', 'nation_name', 'nation_code', 'actions'];


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
    this.dialog.open(NationComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NationComponent, dialogConfig);
  }

}
