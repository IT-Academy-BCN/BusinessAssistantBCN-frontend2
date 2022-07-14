// ANGULAR CORE
import { Component, OnInit } from '@angular/core';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../models/business-assistant.model';

// SERVICE: VIRTUAL-ASSISTANT-CATEGORIES-SERVICE
import { VirtualAssisstantCategoriesService } from '../services/virtual-assistant-categories.service';


@Component({
    selector: 'app-virtual-assistant-page',
    templateUrl: './virtual-assistant-page.component.html'
})
export class VirtualAssistantPageComponent implements OnInit {

    // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
    dataSourceCategory: Category[];

    //** Construtor with VACategoriesService to get all categories to show. */
    constructor(private serviceCategories: VirtualAssisstantCategoriesService) {
        this.dataSourceCategory = [];
        this.serviceCategories.getCategories();
        window.scroll(0, 0);
    }

    /** Obtain data into 'dataSourceCategory' from VACategoriesService. */
    ngOnInit(): void {
        this.dataSourceCategory = this.serviceCategories.categories;
    }

}
