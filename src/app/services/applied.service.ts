import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppliedService {

  constructor(private _http:HttpClient) { }

  appliedPost(data:any): Observable<any>{
    return this._http.post('http://localhost:8080/applyList',data);
  }
  getAppliedPostList(): Observable<any>{
    return this._http.get('http://localhost:8080/applyList');
  }

  deleteApplyList(id:number):Observable<any>{
    return this._http.delete(`http://localhost:8080/applyList/${id}`);
  }
}
