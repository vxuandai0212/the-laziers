import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 1;
  pageEvent: PageEvent;

  displayedColumns: string[] = [
    'title', 'square_thumbnail', 'category', 'tags', 'created_by', 'created_at'
  ];
  data: Post[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPosts(this.pageSize, this.pageSize*this.pageIndex)
    .subscribe(res => {
      this.length = res.total;
      this.data = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  pageChange(e: any) {
    console.log(e);
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.ngOnInit();
  }

}
