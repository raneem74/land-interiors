import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerslideService {
  endPoint: string = `${environment.apiUrl}/partners`;
  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(this.endPoint);
  }
}
