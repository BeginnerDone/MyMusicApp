/*
 * @Author: dream.wudongdong 
 * @Date: 2019-06-18 14:12:59 
 * @Last Modified by:   dream.wudongdong 
 * @Last Modified time: 2019-06-18 14:12:59 
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Interceptor } from './http-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
];
