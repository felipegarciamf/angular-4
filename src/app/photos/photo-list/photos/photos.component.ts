import { Component, OnInit, Input } from '@angular/core';
import { PhotoModel } from 'src/app/model/photo-model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: PhotoModel[];

  constructor() { }

  ngOnInit() {
  }

}
