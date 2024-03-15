import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurMissionService {
  endPoint: string = `${environment.apiUrl}/our-mission`;
  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(this.endPoint);
  }
}
