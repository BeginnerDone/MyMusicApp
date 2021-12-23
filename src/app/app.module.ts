import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewListComponent } from './new-list/new-list.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MusicComponent } from './music/music.component'
import { httpInterceptorProviders } from "./http-interceptors/http-index";
import { DetailComponent } from './detail/detail.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
registerLocaleData(zh);
@NgModule({
    declarations: [
        AppComponent,
        NewListComponent,
        MusicComponent,
        DetailComponent,
        MusiclistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatInputModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN },httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
