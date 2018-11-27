import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postForm: FormGroup;

  _id:string = '';
  slug:string = '';
  title:string = '';
  short_content:string = '';
  content:string = '';
  image:string = '';
  category:string = '';
  tags:string = '';
  created_by:string = '';
  isLoadingResults = false;
  thumbnail_is_new = false;

  editorConfig: object = {
    minHeight: "300px"
  }

  categories: Category[] = [
    {value: 'World', viewValue: 'World'},
    {value: 'Politics', viewValue: 'Politics'},
    {value: 'Business', viewValue: 'Business'},
    {value: 'Tech', viewValue: 'Tech'},
    {value: 'Entertainment', viewValue: 'Entertainment'},
    {value: 'Life', viewValue: 'Life'},
    {value: 'Style', viewValue: 'Style'},
    {value: 'Books', viewValue: 'Books'},
    {value: 'Food', viewValue: 'Food'},
    {value: 'Travel', viewValue: 'Travel'}
  ];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPost(this.route.snapshot.params['id']);
    this.postForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'short_content' : [null, Validators.required],
      'content' : [null, Validators.required],
      'category' : [null, Validators.required],
      'tags' : [null, Validators.required],
      'created_by' : [null, Validators.required]
    });
  }

  getPost(id) {
    this.api.getPost(id).subscribe(data => {
      this.isLoadingResults = false;
      this._id = data.post._id;
      this.slug = data.post.slug;
      this.image = data.post.square_thumbnail;
      this.postForm.setValue({
        title: data.post.title,
        short_content: data.post.short_content,
        content: data.post.content,
        category: data.post.category,
        tags: data.post.tags,
        created_by: data.post.created_by || ''
      });
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;

    this.api.updatePost(this._id, {post:form, image:this.image, thumbnail_is_new: this.thumbnail_is_new})
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/posts']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  postDetails() {
    this.router.navigate(['/posts', this.slug]);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        let target: any = event.target; //<-- This (any) will tell compiler to shut up!
        let content: string = target.result;
        this.image = content;
        this.thumbnail_is_new = true;
      }
    }
  }

}
