import {Component, OnInit, ViewChild} from '@angular/core';
import {ComuneService} from '../../../shared/map/comune.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ComuneComponent} from '../../comuni/comune/comune.component';
import {CapComponent} from '../cap/cap.component';

@Component({
  selector: 'app-cap-list',
  templateUrl: './cap-list.component.html',
  styleUrls: ['./cap-list.component.css']
})
export class CapListComponent implements OnInit {

  constructor(private service: ComuneService,
              private dialog: MatDialog) {
  }
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['cap_id', 'cap_name', 'cap_code', 'actions'];


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
    this.dialog.open(CapComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CapComponent, dialogConfig);
  }

}
