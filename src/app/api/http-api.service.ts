import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';// RxJS 可觀察物件和運算子

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private BaseUrl: string = 'http://localhost:8081/sys/v1.0';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  //-------------------------帳號管理---------------------------------------------------------------------------
  //取得所有帳號資料
  getAllAccountRequest(page: number): Observable<any> {
    return this.http.get(this.BaseUrl + '/Account?page=' + page + '&limit=20');
  }
  //取得單筆帳號資料
  getOneAccountRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Account/${id}`;
    return this.http.get(url);
  }
  //新增帳號資料
  postAccountRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/Account`;
    return this.http.post(url, body);
  }
  //編輯帳號資料
  patchAccountRequest(id: any, body: any): Observable<any> {
    const url = `${this.BaseUrl}/Account/${id}`;
    return this.http.patch(url, body);
  }
  //刪除帳號資料
  deleteAccountRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Account/${id}`;
    return this.http.delete(url);
  }
  //-------------------------產品管理---------------------------------------------------------------------------
  //取得所有產品資料
  // getAllProductRequest(page: number): Observable<any> {
  //   return this.http.get(this.BaseUrl + '/GetAllFactory?page=' + page + '&limit=20');
  // }
  //取得單筆產品資料
  getAllProductRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Factory/GetByFIDFactory/${id}`;
    return this.http.get(url);
  }
  //取得單筆產品資料
  getOneProductRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Product/${id}`;
    return this.http.get(url);
  }
  //新增產品資料
  postProductRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/Product`;
    return this.http.post(url, body);
  }
  //編輯產品資料
  patchProductRequest(id: any, body: any): Observable<any> {
    const url = `${this.BaseUrl}/Product/${id}`;
    return this.http.patch(url, body);
  }
  //刪除產品資料
  deleteProductRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Product/${id}`;
    return this.http.delete(url);
  }
  //-------------------------訂單管理---------------------------------------------------------------------------
  //取得所有訂單資料
  getAllOrderRequest(page: number): Observable<any> {
    return this.http.get(this.BaseUrl + '/Order?page=' + page + '&limit=20');
  }
  //取得單筆訂單資料
  getOneOrderRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Order/${id}`;
    return this.http.get(url);
  }
  //新增訂單資料
  postOrderRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/Order`;
    return this.http.post(url, body);
  }
  //編輯訂單資料
  patchOrderRequest(id: any, body: any): Observable<any> {
    const url = `${this.BaseUrl}/Order/${id}`;
    return this.http.patch(url, body);
  }
  //刪除訂單資料
  deleteOrderRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Order/${id}`;
    return this.http.delete(url);
  }
  //-------------------------訂單明細管理---------------------------------------------------------------------------
  //取得所有訂單明細資料
  getAllOrderDetailRequest(page: number): Observable<any> {
    return this.http.get(this.BaseUrl + '/OrderDetail?page=' + page + '&limit=20');
  }
  //取得單筆訂單明細資料
  getOneOrderDetailRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/OrderDetail/${id}`;
    return this.http.get(url);
  }
  //新增訂單明細資料
  postOrderDetailRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/OrderDetail`;
    return this.http.post(url, body);
  }
  //編輯訂單明細資料
  patchOrderDetailRequest(id: any, body: any): Observable<any> {
    const url = `${this.BaseUrl}/OrderDetail/${id}`;
    return this.http.patch(url, body);
  }
  //刪除訂單明細資料
  deleteOrderDetailRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/OrderDetail/${id}`;
    return this.http.delete(url);
  }
  //-------------------------廠商管理---------------------------------------------------------------------------
  //取得所有廠商資料
  getAllFactoryRequest(page: number): Observable<any> {
    return this.http.get(this.BaseUrl + '/Factory?page=' + page + '&limit=20');
  }
  //取得單筆廠商資料
  getOneFactoryRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Factory/${id}`;
    return this.http.get(url);
  }
  //新增廠商資料
  postFactoryRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/Factory`;
    return this.http.post(url, body);
  }
  //編輯廠商資料
  patchFactoryRequest(id: any, body: any): Observable<any> {
    const url = `${this.BaseUrl}/Factory/${id}`;
    return this.http.patch(url, body);
  }
  //刪除廠商資料
  deleteFactoryRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/Factory/${id}`;
    return this.http.delete(url);
  }
}
