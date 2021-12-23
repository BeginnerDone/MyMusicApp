import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpResponseBase
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

const baseUrl="https://api.apiopen.top"
@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq = req.clone({
            url:baseUrl+req.url
          });
        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理
                if (event instanceof HttpResponseBase) return this.handleData(event);
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err)),
        );
    }
    private handleData(event: HttpResponseBase): Observable<any> {
        // 业务处理
        switch (event.status) {//正常的status响应
            case 200:
                if (event instanceof HttpResponse) {
                    const body: any = event.body;
                    console.log(body.code)
                    if (body && body.code != 200) {//200为业务编码响应成功
                        return throwError({});
                    } else {
                        return of(new HttpResponse(Object.assign(event, { body: body.result })));
                    }
                }
                break;
            case 401:

            case 403:
            case 404:
            case 500:
                break;
            default:
                break;
        }
        return of(event);
    }
}
