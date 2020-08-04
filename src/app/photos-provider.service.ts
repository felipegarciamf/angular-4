import { PhotoModel } from './model/photo-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosProviderService {

  private url: string = "http://localhost:3000/flavio";


  constructor(private http: HttpClient) {

  }

  getPhotos() {
    return this.http.get<PhotoModel[]>(this.url + "/photos")
  }
}
