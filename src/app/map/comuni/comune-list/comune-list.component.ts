import {Component, OnInit, ViewChild} from '@angular/core';
import {IComune} from '../../../shared/map/comune';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ComuneService} from '../../../shared/map/comune.service';
import {ComuneComponent} from '../comune/comune.component';


const ELEMENT_DATA: IComune[] = [
  {comune_id: 1, comune_name: 'kit kat', comune_code: 'NL'},
  {comune_id: 2, comune_name: 'kit kat', comune_code: 'NL'},
  {comune_id: 3, comune_name: 'kit kat', comune_code: 'NL'},
  {comune_id: 4, comune_name: 'kit kat', comune_code: 'NL'},
];

@Component({
  selector: 'app-comune-list',
  templateUrl: './comune-list.component.html',
  styleUrls: ['./comune-list.component.css']
})
export class ComuneListComponent implements OnInit {

  constructor(private service: ComuneService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['comune_id', 'comune_name', 'comune_code', 'actions'];


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
    this.dialog.open(ComuneComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ComuneComponent, dialogConfig);
  }
}
