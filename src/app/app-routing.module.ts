import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from "./new-list/new-list.component";
import { MusicComponent } from "./music/music.component";
import { DetailComponent } from "./detail/detail.component";
import { MusiclistComponent } from "./musiclist/musiclist.component"
const routes: Routes = [{
    path: "",
    redirectTo: "newList",
    pathMatch: "full"
}, {
    path: "newList",
    component: NewListComponent
}, {
    path: "music",
    component: MusicComponent
}, {
    path: "musiclist",
    component: MusiclistComponent
}, {
    path: "detail",
    component: DetailComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
