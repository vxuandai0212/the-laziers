import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/posts";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts (limit, offset): Observable<any> {
    return this.http.get<Post[]>(apiUrl, {params: {limit: limit, offset: offset}})
      .pipe(
        tap(heroes => console.log('fetched posts')),
        catchError(this.handleError('getPosts', []))
      );
  }
  
  getPost(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }
  
  addPost (post, image): Observable<Post> {
    return this.http.post<Post>(apiUrl, {post,image}, httpOptions).pipe(
      tap((post: Post) => console.log(`added product w/ id=${post._id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }
  
  updatePost (id, post): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => console.log(`updated post id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }
  
  deletePost (id): Observable<Post> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
