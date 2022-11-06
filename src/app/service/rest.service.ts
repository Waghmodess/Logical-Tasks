import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getImg() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/");
  }

  getTit() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/1/posts ")
  }

  getcomment() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }

  getTodo() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/1/todos ")
  }


}
