import { Component, OnInit } from '@angular/core';
import { MusicService } from "./music.service"
import { Router } from '@angular/router';
import { BaseClass } from '../base-class';
@Component({
    selector: 'app-musiclist',
    templateUrl: './musiclist.component.html',
    styleUrls: ['./musiclist.component.scss']
})
export class MusiclistComponent extends BaseClass implements OnInit {
    MusicList = [];
    name = "";
    loading = false;
    constructor(private musicService: MusicService, private router: Router) {
        super();
    }

    ngOnInit() {
    }
    searchMusic() {
        this.loading = true;
        this.musicService.searchMusic(this.name).subscribe(res => {
            if (res != "") {
                this.MusicList = res;
            } else {
                this.MusicList = [];
            }
            this.loading = false;
        })
    }
    playMusic(index: any) {
        console.log(index);
        let list = [];
        this.MusicList.forEach(item => {
            list.push({
                name: item.title,
                artist: item.author,
                url: item.url,
                cover: item.pic,
                theme: '#ebd0c2'
            })
        })
        sessionStorage.setItem("musicList", JSON.stringify(list));
        this.router.navigate(['music'],{
            queryParams:{
                index:index
            }
        })
    }
}
