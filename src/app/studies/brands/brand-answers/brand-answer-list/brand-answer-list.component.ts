import {Component, OnInit, ViewChild} from '@angular/core';
import {IBrandAnswer} from '../../../../shared/studies/brand/brandAnswer';
import {BrandAnswerService} from '../../../../shared/studies/brand/brand-answer.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BrandAnswerComponent} from '../brand-answer/brand-answer.component';

const ELEMENT_DATA: IBrandAnswer[] = [
  {brand_ans_id: 1, title: 'fffff', ins_data: 'answ?', upd_data: 'description '},
  {brand_ans_id: 2, title: 'fffff', ins_data: 'answ?', upd_data: 'description '},
  {brand_ans_id: 3, title: 'fffff', ins_data: 'yeansws?', upd_data: 'description '},
  {brand_ans_id: 5, title: 'fffff', ins_data: 'yeansws?', upd_data: 'description '},
  {brand_ans_id: 6, title: 'fffff', ins_data: 'yeansws?', upd_data: 'description '},
  {brand_ans_id: 7, title: 'fffff', ins_data: 'yes?', upd_data: 'description '},
];

@Component({
  selector: 'app-brand-answer-list',
  templateUrl: './brand-answer-list.component.html',
  styleUrls: ['./brand-answer-list.component.css']
})
export class BrandAnswerListComponent implements OnInit {

  constructor(private service: BrandAnswerService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['brand_ans_id', 'title', 'ins_data', 'upd_data', 'actions'];


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
    this.dialog.open(BrandAnswerComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(BrandAnswerComponent, dialogConfig);
  }

}
