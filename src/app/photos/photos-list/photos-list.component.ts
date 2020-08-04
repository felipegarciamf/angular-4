import { PhotosProviderService } from './../../photos-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos = [];

  constructor(private photoProvider: PhotosProviderService) {
  }

  ngOnInit() {
    this.populaFoto();
  }

  populaFoto() {
    this.photoProvider.getPhotos().subscribe((resp)=> {
      this.photos = resp;
    }, (err) => {
      console.log("nao trouxe nada" + err);
    })
  }

}
