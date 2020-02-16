import { Component, OnInit } from '@angular/core';
import {ComuneConfigService} from '../../../shared/map/comune-config.service';
//import { ToastrService } from 'ngx-toastr';
import {ComuneConfig} from '../../../shared/map/comuneConfig.model';


@Component({
  selector: 'app-comune-config-list',
  templateUrl: './comune-config-list.component.html',
  styleUrls: ['./comune-config-list.component.css']
})
export class ComuneConfigListComponent implements OnInit {

  constructor(private service: ComuneConfigService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: ComuneConfig) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteComune(id).subscribe(res => {
        this.service.refreshList();
        //this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }

}
