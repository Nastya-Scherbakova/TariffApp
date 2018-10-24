import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

getTariffList() : Observable<any>{
  return this.http.get('assets/files/tariffs.json');
}

}
