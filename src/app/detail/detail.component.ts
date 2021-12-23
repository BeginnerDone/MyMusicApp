import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NewlistService } from '../new-list/newlist.service';
import { BaseClass } from '../base-class';
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends BaseClass implements OnInit {
    Id = ""
    detailData = null
    constructor(private activeRouter: ActivatedRoute, private newListService: NewlistService) {
        super();
        activeRouter.queryParams.subscribe(queryParams => {
            this.Id = queryParams.sid;
        })
    }

    ngOnInit() {
        this.getDetails();
    }
    getDetails() {
        this.newListService.getDetail(this.Id).subscribe(res => {
            this.detailData = res;
            console.log(this.detailData.type)
        })
    }
}
