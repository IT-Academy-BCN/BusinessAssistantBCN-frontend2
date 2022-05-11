import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../../../models/breadcrumb.model';
import { isNullOrUndefined } from 'is-what';
import { BreadcrumbService } from 'src/app/service/breadcrumb.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})


export class BreadcrumbComponent implements OnInit {

  static ROUTE_DATA_BREADCRUMB = 'breadcrumb';

  private _breadcrumbs: Breadcrumb[]= [];

  get breadcrumbs(): Breadcrumb[] {
    return [...this._breadcrumbs];
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this._breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
        this.addBreadcrumb(this._breadcrumbs);
      });
  }

  ngOnInit(): void {
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
    ): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    var childFound:any;
    for (const child of children) {

      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label =
        child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({ label, url });
      }
      childFound = child
    }
    return this.createBreadcrumbs(childFound, url, breadcrumbs);
  }

  addBreadcrumb(breadcrumb: Breadcrumb[]){
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

}
