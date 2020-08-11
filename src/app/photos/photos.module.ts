import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotosListComponent, 
        PhotosFormComponent, 
        PhotosComponent,
        FilterByDescription
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {}