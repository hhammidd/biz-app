import {Component, OnInit, ViewChild} from '@angular/core';
import {IRole} from '../../shared/role/role';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RoleService} from '../../shared/role/role.service';
import {RoleComponent} from '../role/role.component';

const ELEMENT_DATA: IRole[] = [
  {role_id: 1, role_name: 'Admin', company_id: 1},
  {role_id: 2, role_name: 'Administrator', company_id: 1},
  {role_id: 3, role_name: 'Administrator', company_id: 1},
  {role_id: 4, role_name: 'Administrator', company_id: 1},
  {role_id: 5, role_name: 'Agent', company_id: 1},
  {role_id: 6, role_name: 'AreaManager2', company_id: 1}
];

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  constructor(private service: RoleService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['role_id', 'role_name', 'company_id', 'actions'];


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
    this.dialog.open(RoleComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(RoleComponent, dialogConfig);
  }


}
