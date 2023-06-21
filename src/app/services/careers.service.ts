import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareersService {
  constructor(public _http: HttpClient) { }

  addPost(data: any): Observable<any> {
    // return this._http.post('http://localhost:5000/careers',data);
    return this._http.post('http://localhost:8080/careers/', data);
  }

  getPost(): Observable<any> {
    return this._http.get('http://localhost:8080/careers');
  }
}
