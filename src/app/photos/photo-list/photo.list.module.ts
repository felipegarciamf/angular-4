import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card/card.module';



@NgModule({


    // declaração de components que existem no modulo fazendo binding entre eles
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    // importando modulos que serão usados dentro dos declarations
    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ],
    // exporta todos os components, caso alguem puxe o módulo
    exports : [

    ]
})
export class PhotoListModule  {

}