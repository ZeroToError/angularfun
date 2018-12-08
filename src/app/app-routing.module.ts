import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostAddComponent} from './post-add/post-add.component';

const routes: Routes = [
  {path: 'postDetail', component: PostDetailComponent},
  {path: 'postList', component: PostListComponent},
  {path: 'postAdd', component: PostAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
