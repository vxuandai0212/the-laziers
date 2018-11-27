import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'All posts' },
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    data: { title: 'Post Detail' },
    canActivate: [AuthGuard]
  },
  {
    path: 'post-add',
    component: PostAddComponent,
    data: { title: 'Add Post' },
    canActivate: [AuthGuard]
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent,
    data: { title: 'Edit Post' },
    canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   redirectTo: '/posts',
  //   pathMatch: 'full'
  // }
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
