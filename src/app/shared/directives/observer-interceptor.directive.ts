import { AfterViewInit, Directive, ElementRef, Input, Output, Renderer2 } from "@angular/core";

/*This directive is used in the html img element. Images should be inserted with data-srcset and with this directive
* included. This directive will check if the image is inside the view, whenever the image enters the screen view
* the directive replaces data-srcset for srcset. This achieves two things, when images are not in the view they
* are not loaded, until they are about to enter the view and also the images are scaled based on screen size via the
* srcset attribute nomenclature.
*
* The directive has two properties:
*
* Threshold - To indicate at what point the image should be loaded (0 means at the first pixel, 0.5 means until half
* the image is visible)
*
* RootMargin - Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
* This set of values serves to grow or shrink each side of the root element's (viewport) bounding box
* before computing intersections.
* */

@Directive({
    selector: '[intersect-obs]'
})

export class ObserverIntersectionDirective implements AfterViewInit {

    @Input() threshold: number = 0;
    @Input() rootMargin: string = '0px';

    observer: IntersectionObserver | undefined;
    imgUrl: string = this.el.nativeElement.getAttribute('data-srcset')


    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngAfterViewInit() {
        this.createObserver();
    }

    createObserver() {
        let options = {
            root: null,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        }

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                this.renderer.setAttribute(this.el.nativeElement, 'srcset', this.imgUrl)
            })
        }, options);
        this.observer.observe(this.el.nativeElement)
    }
}






