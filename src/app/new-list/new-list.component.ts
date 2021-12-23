import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NewlistService } from './newlist.service';
@Component({
    selector: 'app-new-list',
    templateUrl: './new-list.component.html',
    styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
    TypeList = [{
        key: "all",
        text: "全部"
    }, {
        key: "text",
        text: "文字"
    }, {
        key: "video",
        text: "视频"
    }, {
        key: "image",
        text: "图片"
    }, {
        key: "gif",
        text: "动态图"
    }
    ];
    listType = "text";
    page: number = 1;
    DataList: any[] = [];
    initLoading = true;
    loadingMore = false;
    list: Array<{ loading: boolean; name: any }> = [];
    constructor(private newlist: NewlistService, private router: Router) { }
    ngOnInit() {
        this.getList();
    }
    nzSelectChange(select: any) {
        this.DataList = [];
        this.listType = this.TypeList[select.index].key;
        this.page = 1;
        this.getList();
    }

    getList() {
        this.initLoading = true;
        this.newlist.getList(this.listType, this.page).subscribe(res => {
            this.DataList = this.DataList.concat(res);
            this.initLoading = false
        })
    }


    /**
     * 下一页
     */
    onLoadMore() {
        this.page++;
        this.getList()
    }
    details(id) {
        //详情页
        this.router.navigate(['detail'], {
            queryParams: {
                sid: id
            }
        })
    }
    goMusic() {
        //前往music页面：
        this.router.navigate(['musiclist'])
    }
}
