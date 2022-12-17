import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './component/albums/albums.component';
import { CommentComponent } from './component/comment/comment.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ChildComponent } from './component/inter-comp-communication/child/child.component';
import { ParentComponent } from './component/inter-comp-communication/parent/parent.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  // { path: "", redirectTo: 'header', pathMatch: 'full' },
  { path: "", component: HeaderComponent },
  { path: "post", component: PostComponent },
  { path: "home", component: HomeComponent },
  { path: "comment", component: CommentComponent },
  { path: "to-dos", component: GallaryComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "child", component: ChildComponent },
  { path: "parent", component: ParentComponent },
  { path: "header", component: HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
