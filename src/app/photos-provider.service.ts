import { PhotoModel } from './model/photo-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosProviderService {

  private url: string = "http://localhost:3000/";


  constructor(private http: HttpClient) {

  }

  listFromUser(userName: string){
    return this.http.get<PhotoModel[]>(this.url + userName + "/photos")
  }

  getPhotos() {
    return this.http.get<PhotoModel[]>(this.url + "/photos")
  }


  listFromUserPaginated(userName: string, page: number){
    const calopsita = new HttpParams()
    .append('page', page.toString());

    return this.http.get<PhotoModel[]>(this.url + userName + "/photos", { params: calopsita });
  }


}
