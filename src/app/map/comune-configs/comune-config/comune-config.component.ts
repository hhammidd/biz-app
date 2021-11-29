import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ComuneConfigService} from '../../../shared/map/comune-config.service';

//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comune-config',
  templateUrl: './comune-config.component.html',
  styleUrls: ['./comune-config.component.css']
})
export class ComuneConfigComponent implements OnInit {

  constructor(private service: ComuneConfigService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      comuneId: null,
      comuneName: '',
      comuneCode: '',
      provinceId: 1
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.ComuneId == null)
      this.insertRecord(form);
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postComuneConfig(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putComuneConfig(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
