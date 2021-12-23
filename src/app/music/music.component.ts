import { Component, OnInit } from '@angular/core';

import APlayer from 'APlayer';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
    index = ""
    constructor(private activeRoute: ActivatedRoute) {
        activeRoute.queryParams.subscribe(params => {
            this.index = params.index;
        })
    }

    ngOnInit() {
        const List = JSON.parse(sessionStorage.getItem("musicList"));
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            audio: List
        });
        ap.list.switch(this.index);//切换至列表页点击的歌曲
    }

}
