
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";
import { CardComponent } from './card/card.component';


@NgModule({
    declarations: [
        PhotoComponent,
        CardComponent
    ],
    exports: [
        PhotoComponent
    ]
   })
export class PhotoModule {

}
