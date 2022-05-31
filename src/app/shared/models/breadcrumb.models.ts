import { Params } from "@angular/router";


export interface Breadcrumb {
    label: string;
    params?: Params;
    url: string;
}