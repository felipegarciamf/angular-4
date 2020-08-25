
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";
import { CardComponent } from "src/app/shared/components/card/card/card.component";



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
