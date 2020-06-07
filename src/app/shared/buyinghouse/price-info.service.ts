import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PriceInfo} from './priceInfo.model';

@Injectable({
  providedIn: 'root'
})
export class PriceInfoService {
  private usersUrl: string;

  // private url: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089';
    // this.url = '/assets/data/employees.json';

  }

  formData: PriceInfo;
  list: PriceInfo[];

  postComuneConfig(formData: PriceInfo) {
    return this.http.post<PriceInfo>(this.usersUrl + '/pricecheck', formData);

  }

  refreshList() {
    console.log('ddd');
    this.http.get<PriceInfo[]>(this.usersUrl + '/pricecheck/price')
      .toPromise().then(res => this.list = res as PriceInfo[]);
  }

  // putComuneConfig(formData: PriceInfo) {
  //   return this.http.put(this.usersUrl + '/comune-config/' + formData.comuneId, formData);
  //
  // }

  // deleteComune(id: number) {
  //   return this.http.delete(this.usersUrl + '/comune-config/' + id);
  // }

}
