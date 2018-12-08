import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './models/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUri = 'https://tranquil-lake-48038.herokuapp.com/posts';
  constructor(private httpService: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpService.get<Post[]>(this.postUri);
  }

  public addNewPost(post: Post): Observable<Post> {
    return this.httpService.post<Post>(this.postUri, post, httpOptions);
  }
}
