import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotoModel } from './../../model/photo-model';


@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos: PhotoModel[] = [];
  public filter: string = '';
  debouce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debouce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

}
