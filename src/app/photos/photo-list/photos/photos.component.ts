import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoModel } from 'src/app/model/photo-model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoModel[];

  rows : any = [];

  constructor() { }

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }


  groupColumns(photos: PhotoModel[]){
    const newRows = [];

    console.log(photos);
    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index,index+3));
    }
    console.log(newRows);
    return newRows;
  }

}
