import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './component/albums/albums.component';
import { CommentComponent } from './component/comment/comment.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "post", component: PostComponent },
  { path: "home", component: HomeComponent },
  { path: "comment", component: CommentComponent },
  { path: "gallary", component: GallaryComponent },
  { path: "albums", component: AlbumsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
