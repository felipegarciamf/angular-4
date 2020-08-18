import { PhotosProviderService } from './../../photos-provider.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotoModel } from './../../model/photo-model';


@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  public photos: PhotoModel[] = [];
  public filter: string = '';
  debounce: Subject<string> = new Subject<string>();
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
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => { 
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
  }



}
