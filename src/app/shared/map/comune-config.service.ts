import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ComuneConfig} from './comuneConfig.model';
import {INation} from "./nation";

@Injectable({
  providedIn: 'root'
})
export class ComuneConfigService {

  private usersUrl: string;
  // private url: string;

  constructor(private http: HttpClient) {
     this.usersUrl = 'http://94.130.228.242:31430/';
    // this.usersUrl = 'http://localhost:8061/';
    // this.url = '/assets/data/employees.json';

  }

  formData: ComuneConfig;
  list: ComuneConfig[];

  postComuneConfig(formData: ComuneConfig) {
    return this.http.post<ComuneConfig>(this.usersUrl + '/comune-config', formData);
  }

  // getCountries() {
  //   console.log('ddd');
  //   this.http.get<INation[]>(this.usersUrl + '/nation-config')
  //     .toPromise().then(res => this.list = res as INation[]);
  // }

  refreshList() {
    console.log('ddd');
    this.http.get<ComuneConfig[]>(this.usersUrl + '/comune-config')
      .toPromise().then(res => this.list = res as ComuneConfig[]);
  }

  putComuneConfig(formData: ComuneConfig) {
    return this.http.put(this.usersUrl + '/comune-config/' + formData.comuneId, formData);

  }

  deleteComune(id: number) {
    return this.http.delete(this.usersUrl + '/comune-config/' + id);
  }

}
