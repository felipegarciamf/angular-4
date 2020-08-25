import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PhotosProviderService } from '../../photos-provider.service';
import { PhotoModel } from '../../model/photo-model';


@Component({
  selector: 'ap-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos: PhotoModel[] = [];
  public filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotosProviderService
    ) {
  }


  ngOnInit() : void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => { 
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
  }



}
