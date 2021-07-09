import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {IGeoFilter} from "../../../../shared/geoFilter/geoFilter";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private usersUrl: string;

  // private url: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8087';
    // this.url = '/assets/data/employees.json';

  }

  formData: IGeoFilter;
  list: IGeoFilter[];

  postComuneConfig(formData: IGeoFilter) {
    console.log(this.formData);
    return this.http.post<IGeoFilter>(this.usersUrl + '/geo-filter', formData);

  }

  // refreshList() {
  //   console.log('ddd');
  //   this.http.get<ComuneConfig[]>(this.usersUrl + '/comune-config')
  //     .toPromise().then(res => this.list = res as ComuneConfig[]);
  // }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    field: new FormControl(''),
    cap: new FormControl('0001'),
    comune: new FormControl(''),
    province: new FormControl(''),
    region: new FormControl(''),
    country: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      //$key: null,
      field: '',
      cap: '',
      comune: '',
      province: '',
      region: '',
      country: '',
    });
  }


}
