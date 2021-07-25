import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
}                     from "@angular/common/http";
import {Observable}   from "rxjs";

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export interface Todo {
  id: string;
  createdAt: number;
  done: boolean;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoSdkService {
  private todoApiUrl = 'https://60fb168291156a0017b4c76e.mockapi.io/todos';
  public constructor(private http: HttpClient) { }

  public get(endPoint: string, options?: IRequestOptions): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoApiUrl + endPoint, options);
  }

  public post(endPoint: string, params: Object, options?: IRequestOptions): Observable<Todo> {
    return this.http.post<Todo>(this.todoApiUrl + endPoint, params, options);
  }

  public put(endPoint: string, params: Object, options?: IRequestOptions): Observable<Todo> {
    return this.http.put<Todo>(this.todoApiUrl + endPoint, params, options);
  }

  public delete(endPoint: string, options?: IRequestOptions): Observable<Todo> {
    return this.http.delete<Todo>(this.todoApiUrl + endPoint, options);
  }
}
