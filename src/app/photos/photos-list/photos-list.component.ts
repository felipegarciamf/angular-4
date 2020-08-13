import { PhotoModel } from './../../model/photo-model';
import { PhotosProviderService } from './../../photos-provider.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos: PhotoModel[] = [];
  public filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

}
