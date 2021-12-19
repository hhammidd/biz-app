import {Component, OnInit, ViewChild} from '@angular/core';
import {IBrandAnswer} from '../../../../shared/studies/brand/brandAnswer';
import {IBrandMicro} from '../../../../shared/studies/brand/brandMicro';
import {BrandAnswerService} from '../../../../shared/studies/brand/brand-answer.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BrandAnswerComponent} from '../../brand-answers/brand-answer/brand-answer.component';
import {BrandMicroService} from '../../../../shared/studies/brand/brand-micro.service';
import {BrandMicroComponent} from '../brand-micro/brand-micro.component';

const ELEMENT_DATA: IBrandMicro[] = [
  { brand_id: 1, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 2, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 3, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 4, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 5, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 1, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },
  { brand_id: 1, brand_name: 'fffff', sp_for_brand: 10, sp_potentialsp_for_brand_percentage: 1,
    sp_potential: 1, sp_brand_total_territory: 12, brand_potential: 10, brand_per_sp_percentage:10,
    brand_efficency: 1, value_eeficency: 12
  },

];

@Component({
  selector: 'app-brand-micro-list',
  templateUrl: './brand-micro-list.component.html',
  styleUrls: ['./brand-micro-list.component.css']
})
export class BrandMicroListComponent implements OnInit {

  constructor(private service: BrandMicroService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['brand_id', 'brand_name', 'sp_for_brand', 'sp_potentialsp_for_brand_percentage',
    'sp_potential', 'sp_brand_total_territory', 'brand_potential', 'brand_per_sp_percentage',
    'brand_efficency', 'value_eeficency'];


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
    this.dialog.open(BrandMicroComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(BrandMicroComponent, dialogConfig);
  }

}
