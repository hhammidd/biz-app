import {Component, OnInit, ViewChild} from '@angular/core';
import {IBrandQuestion} from '../../../../shared/studies/brand/brandQuestion';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BrandQuestionService} from '../../../../shared/studies/brand/brand-question.service';
import {BrandQuestionComponent} from '../brand-question/brand-question.component';

const ELEMENT_DATA: IBrandQuestion[] = [
  {brand_que_id: 1, title: 'fffff', question: 'yes?', desc: 'description '},
  {brand_que_id: 2, title: 'fffff', question: 'yes?', desc: 'description '},
  {brand_que_id: 3, title: 'fffff', question: 'yes?', desc: 'description '},
  {brand_que_id: 4, title: 'fffff', question: 'yes?', desc: 'description '},

];

@Component({
  selector: 'app-brand-question-list',
  templateUrl: './brand-question-list.component.html',
  styleUrls: ['./brand-question-list.component.css']
})
export class BrandQuestionListComponent implements OnInit {

  constructor(private service: BrandQuestionService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['brand_que_id', 'title', 'question', 'desc', 'actions'];


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
    this.dialog.open(BrandQuestionComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(BrandQuestionComponent, dialogConfig);
  }

}
