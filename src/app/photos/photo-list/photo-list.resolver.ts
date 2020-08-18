import { PhotoModel } from './../../model/photo-model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PhotosProviderService } from './../../photos-provider.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>> {

    constructor(private service: PhotosProviderService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<PhotoModel[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}