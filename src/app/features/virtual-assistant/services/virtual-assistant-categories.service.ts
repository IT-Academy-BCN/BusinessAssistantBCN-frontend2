// ANGULAR CORE
import { Injectable } from '@angular/core';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../models/business-assistant.model';


@Injectable({
    providedIn: 'root'
})
export class VirtualAssisstantCategoriesService {

    //** Main Data of the service. */
    private categoriesData: Category[];

    constructor() {
        this.categoriesData = [];
    }

    //** Getter: returns 'categoriesData' */
    get categories(): Category[] {
        return this.categoriesData;
    }

    //** Obtain main data from source. */
    getCategories(): void {
        this.categoriesData = this.getData();
    }

    //** Source data. */
    private getData(): Category[] {
        return [
            {
                title: 'pages.business-assistant.section1.title',
                subcategory: [
                    {
                        title: 'pages.business-assistant.section1.subcat1',
                        items: [
                            { item: 'pages.business-assistant.section1.s1-item1' }
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section1.subcat2',
                        items: [
                            { item: 'pages.business-assistant.section1.s1-item2' },
                            { item: 'pages.business-assistant.section1.s1-item3' }
                        ]
                    },
                ]
            },

            {
                title: 'pages.business-assistant.section2.title',
                subcategory: [
                    {
                        title: 'pages.business-assistant.section2.subcat1',
                        items: [
                            { item: 'pages.business-assistant.section2.s1-item1' },
                            { item: 'pages.business-assistant.section2.s1-item2' },
                            { item: 'pages.business-assistant.section2.s1-item3' },
                            { item: 'pages.business-assistant.section2.s1-item4' },
                            { item: 'pages.business-assistant.section2.s1-item5' },
                            { item: 'pages.business-assistant.section2.s1-item6' },
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section2.subcat2',
                        items: [
                            { item: 'pages.business-assistant.section2.s2-item1' },
                            { item: 'pages.business-assistant.section2.s2-item2' },
                            { item: 'pages.business-assistant.section2.s2-item3' },
                            { item: 'pages.business-assistant.section2.s2-item4' },
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section2.subcat3',
                        items: [
                            { item: 'pages.business-assistant.section2.s3-item1' }
                        ]
                    },
                ]
            },

            {
                title: 'pages.business-assistant.section3.title',
                subcategory: [
                    {
                        title: '',
                        items: [
                            { item: '' }
                        ]
                    }
                ]
            },

            {
                title: 'pages.business-assistant.section4.title',
                subcategory: [
                    {
                        title: 'pages.business-assistant.section4.subcat1',
                        items: [
                            { item: '' }
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section4.subcat2',
                        items: [
                            { item: 'pages.business-assistant.section4.s2-item1' },
                            { item: 'pages.business-assistant.section4.s2-item2' },
                            { item: 'pages.business-assistant.section4.s2-item3' },
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section4.subcat3',
                        items: [
                            { item: 'pages.business-assistant.section4.s3-item1' }
                        ]
                    },
                    {
                        title: 'pages.business-assistant.section4.subcat4',
                        items: [
                            { item: 'pages.business-assistant.section4.s4-item1' },
                            { item: 'pages.business-assistant.section4.s4-item2' },
                        ]
                    },
                ]
            },
            {
                title: 'pages.business-assistant.section5.title',
                subcategory: [
                    {
                        title: '',
                        items: [
                            { item: '' }
                        ]
                    }
                ]
            },
            {
                title: 'pages.business-assistant.section6.title',
                subcategory: [
                    {
                        title: '',
                        items: [
                            { item: '' }
                        ]
                    }
                ]
            },
        ];
    }
}
