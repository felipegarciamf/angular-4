import { PhotosProviderService } from './../../photos-provider.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos = [];

  constructor(private photoProvider: PhotosProviderService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.populaFoto();
  }

  populaFoto() {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoProvider
    .listFromUser(userName)
    .subscribe((resp)=> {
      this.photos = resp;
    }, (err) => {
      console.log("nao trouxe nada" + err);
    })
  }

}
