import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ComuneConfig} from './comuneConfig.model';

@Injectable({
  providedIn: 'root'
})
export class ComuneConfigService {

  private usersUrl: string;
  // private url: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8087';
    // this.url = '/assets/data/employees.json';

  }

  formData: ComuneConfig;
  list: ComuneConfig[];

  postComuneConfig(formData: ComuneConfig) {
    return this.http.post<ComuneConfig>(this.usersUrl + '/comune-config', formData);

  }

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
