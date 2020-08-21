
import { PhotosComponent } from './photo-list/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from "./photo/photo.component";
import { PhotosListComponent } from "./photo-list/photo-list.component";
import { PhotosFormComponent } from "./photo-form/photos-form.component";
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from "./photo-list/load-button/load-button.component";

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CardModule } from '../shared/components/card/card/card.module';

@NgModule({
    declarations : [
        PhotoComponent, 
        PhotosListComponent, 
        PhotosFormComponent, 
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        CardModule
    ]
})
export class PhotosModule {

}