import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    constructor(private http: HttpClient) { }
    searchMusic(name: string): Observable<any> {
        const params = new HttpParams().set("name", name);
        return this.http.request("get", "/searchMusic", {
            params
        })
    }
}
