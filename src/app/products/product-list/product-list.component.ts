import {Component, OnInit, ViewChild} from '@angular/core';
import {IProduct} from '../../shared/product/product';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from '../../shared/product/product.service';
import {ProductComponent} from '../product/product.component';

const ELEMENT_DATA: IProduct[] = [
  {product_id: 1, product_name: 'monopoly', description: 'xssxsx', supplier_id: 1, unit_in_stock: 2},
  {product_id: 2, product_name: 'Admin', description: 'www', supplier_id: 1, unit_in_stock: 2},
  {product_id: 3, product_name: 'Admin', description: 'www', supplier_id: 1, unit_in_stock: 2},

];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['product_id', 'product_name', 'description', 'supplier_id', 'unit_in_stock', 'actions'];


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
    this.dialog.open(ProductComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProductComponent, dialogConfig);
  }


}
