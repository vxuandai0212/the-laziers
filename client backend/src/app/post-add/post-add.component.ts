import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  postForm: FormGroup;
  title:string = '';
  short_content:string = '';
  content:string = '';
  image:string = '';
  category:string = '';
  tags:string = '';
  created_by:string = '';
  isLoadingResults = false;

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

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'short_content' : [null, Validators.required],
      'content' : [null, Validators.required],
      'category' : [null, Validators.required],
      'tags' : [null, Validators.required],
      'created_by' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addPost(form, this.image)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/posts']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        let target: any = event.target; //<-- This (any) will tell compiler to shut up!
        let content: string = target.result;
        this.image = content;
      }
    }
  }

}
