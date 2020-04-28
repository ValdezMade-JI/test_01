import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl: string = '';
  path: string = 'categories';
  categorieList = [];
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.urlBase;
  }

  get(id?: any) {// '?'' allow send or not the param
    /** this method return all data or search by ID 
     *  if the param was sent
    */
    let url = `${this.baseUrl}${this.path}`;
    if (id) {
      url = `${url}/${id}`;
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        res => {
          // res should be an array if not param
          // res should be an simple object if ID param.
          resolve(res);
        },
        err => {
          reject(err);
        })
    });
  }

  create(newCategory) {
    let url = `${this.baseUrl}${this.path}`;
    return new Promise((resolve, reject) => {
      this.http.post(url,newCategory).subscribe(
        _ => {
          resolve();
        },
        err => {
          reject(err);
        })
    });
  }

  update(newCategory) {
    let url = `${this.baseUrl}${this.path}/${newCategory.id}`;
    return new Promise((resolve, reject) => {
      this.http.post(url,newCategory).subscribe(
        _ => {
          resolve();
        },
        err => {
          reject(err);
        })
    });
  }

  delete(id) {
    let url = `${this.baseUrl}${this.path}/${id}`;
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe(
        _ => {
          resolve();
        },
        err => {
          reject(err);
        })
    });
  }
}
