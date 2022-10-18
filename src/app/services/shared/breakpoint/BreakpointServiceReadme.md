# Guía de uso de BreakpointService

## Puntos de rotura
#

Documentación: https://material.angular.io/cdk/layout/overview

De todos los puntos de rotura predefinidos que usa el BreakpointObserver, usamos solo 5:

* XSmall	(max-width: 599.98px)
* Small	    (min-width: 600px) and (max-width: 959.98px)
* Medium	(min-width: 960px) and (max-width: 1279.98px)
* Large	    (min-width: 1280px) and (max-width: 1919.98px)
* XLarge	(min-width: 1920px)

## Implementación
#

Cuando queremos implementar el BreakpointService en nuestros componentes, páginas y demás:

1. En el constructor declaramos la inyección del servicio:  

        constructor (private responsive: BreakpointService) { }

2. También en el constructor, obtenemos el tamaño de pantalla actual. Esto nos lo ofrece el servicio BreakpointService en el método "getCurrentScreenSize()", el cual devuelve un string y éste podrá ser "XSmall", "Small", "Medium", "Large", "XLarge", "Unknown". Se vería algo así (el switch es a modo de ejemplo):  

        constructor (private responsive: BreakpointService) {  
            const currentScreenSize = this.responsive.getCurrentScreenSize();
            switch (currentScreenSize) {
                case 'XSmall': ... break;
                case 'Small': ... break;
                ...
            }
        }

3. Para escuchar los cambios que puedan darse en el tamaño de la pantalla y hacer que todo el tiempo se mantenga un diseño responsive, debemos suscribirnos en ngOnInit:

        ngOnInit() : void {
            this.responsive.breakpoint$.subscribe(
                (res) => {
                    ...
                }
            )
        }