import { Injectable } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  //Array routes
  private _breadcrumbs: Breadcrumb[]= [];

  get breadcrumbs(): Breadcrumb[] {
    return [...this._breadcrumbs];
  }

  constructor() { }

  addBreadcrumb(breadcrumb: Breadcrumb[]){
    this._breadcrumbs = breadcrumb;
  }

}