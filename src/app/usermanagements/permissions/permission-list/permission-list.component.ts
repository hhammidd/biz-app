import {Component, OnInit, ViewChild} from '@angular/core';
import {IPermission} from '../../../shared/permission/permission';
import {PermissionService} from '../../../shared/permission/permission.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PermissionComponent} from '../../../usermanagements/permissions/permission/permission.component';

const ELEMENT_DATA: IPermission[] = [
  {permission_id: 1, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
  {permission_id: 2, permission_name: 'Export - brand analysis', description: 'Export service statistics analysis report'},
  {permission_id: 3, permission_name: 'Export - potential analysis', description: 'Export service statistics analysis report'},
  {permission_id: 4, permission_name: 'Export - Turnovers analysis', description: 'Export service statistics analysis report'},
  {permission_id: 5, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
  {permission_id: 6, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
  {permission_id: 7, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
  {permission_id: 8, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
  {permission_id: 9, permission_name: 'Export - service analysis', description: 'Export service statistics analysis report'},
];

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

  constructor(private service: PermissionService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['permission_id', 'permission_name', 'description', 'actions'];


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
    this.dialog.open(PermissionComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(PermissionComponent, dialogConfig);
  }
}
