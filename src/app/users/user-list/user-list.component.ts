import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../../shared/user/user';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../shared/user/user.service';
import {UserComponent} from '../user/user.component';

const ELEMENT_DATA: IUser[] = [
  {id_utente: 1, nome_utente: 'hamid', company_id: 1, role_id: 1},
  {id_utente: 2, nome_utente: 'hamid1', company_id: 1, role_id: 1},
  {id_utente: 3, nome_utente: 'hamid2', company_id: 1, role_id: 1},
  {id_utente: 4, nome_utente: 'hamid3', company_id: 1, role_id: 1},
  {id_utente: 5, nome_utente: 'hamid4', company_id: 1, role_id: 1},
  {id_utente: 6, nome_utente: 'hamid5', company_id: 1, role_id: 1},
  {id_utente: 7, nome_utente: 'hamid6', company_id: 1, role_id: 1},
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['id_utente', 'nome_utente', 'company_id', 'role_id', 'actions'];


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
    this.dialog.open(UserComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(UserComponent, dialogConfig);
  }

}
