import { CommonModule } from '@angular/common';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { PhotosListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule  {

}