import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post = { 
    _id: '', 
    title: '', 
    banner: '', 
    half_banner: '', 
    square_banner: '',
    square_thumbnail: '',
    big_card: '',
    half_big_card: '',
    card: '',
    half_card: '',
    short_content: '',
    content: '',
    category: '',
    tags: [],
    comments: [],
    created_by: '',
    created_at: null,
    slug: ''
  };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params['id']);
  }

  getPostDetails(id) {
    this.api.getPost(id)
      .subscribe(data => {
        this.post = data;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deletePost(id) {
    console.log(id);
    this.isLoadingResults = true;
    this.api.deletePost(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/posts']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
