
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class NewlistService {

    constructor(private http: HttpClient) { }
    getList(type: string, page: number):Observable<any> {
        const params = new HttpParams().set("type", type).set("page", String(page));
        return this.http.request('get',"/getJoke",{
            params
        })
    }
    getDetail(id:string){
        const params = new HttpParams().set("sid", id);
        return this.http.request('get',"/getSingleJoke",{
            params
        })
    }
}
