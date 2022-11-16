# Business Assistant Barcelona Frontend Project


### Diseño / maquetación

- **Resources/BusinessAssistantBarcelona_design.pdf**
- **Resources/AdobeXD_templates/BusinessAssistantBarcelona.xd**

Necesario instalar [Adobe Creative Cloud](https://creativecloud.adobe.com/apps/download/creative-cloud)

### Instalaciones necesarias

- Angular CLI 13.0.2


### Nomenclatura

- Branches para pull request:
    - fixture/login/[idTask]

### Proceso para ejecución sobre Docker

- Descargar imagen Docker: **Docker pull nginx**
- Ejecución por cmd: **docker run -it -p 80:80 nginx:alpine**
- TODO: Dockerfile config

<hr/>

# Estructura de carpetas [src]


### Carpeta *app*

- **Core**: módulos de componentes de layout (header, footer, navbar, breadcrumbs, ...) y otros elementos que suelen tener solo una instancia en ejecución (interceptores, guards, servicios globales, ...).
- **Features**: características y/o funcionalidades de la aplicación, agrupadas en módulos. "Virtual Assistant" y "My environment" son dos de los principales productos que ofrece la aplicación. También incluye el módulo "home", y un módulo de gestión de usuarios. 
- **Shared**: componentes gráficos modularizados (botones, containers, listas, ...) y otros artefactos (directivas, modelos, ...) reutilizables. La mayor parte del despliegue de Material Design se implementa en los componentes "babcn-" (babcn-accordion, babcn-button, babcn-container, ...). Cada uno de estos componentes es un módulo. La finalidad es poder trazar exactamente qué dependencias tiene cada componente. Se priorizará, siempre que se pueda, encapsular y abstraer Material a fin de tener esta librería bien acotada y fácil de mantener, re-estilizar, etc.


### Carpeta *assets*

- **Dummy**: api mocks para simular la obtención de datos.
- **I18n**: archivos de internacionalización (catalán, castellano e inglés). 
- **Img**: recursos jpg/png/svg de la aplicación.


### Carpeta *entities*

- Incluye una interfaz (auth.ts) para el proceso de identificación (TODO).


### Carpeta *environments*

- Accesos y urls hacia backend, tanto para entorno de desarrollo como para entorno de producción (TODO).

### Carpeta *styles*

- Incluye archivos .scss con los estilos globales de la aplicación. Troceando los estilos y agrupándolos por afinidad obtenemos archivos más pequeños, concretos y manejables. Cabe destacar el documento **_vars.scss**, donde usamos variables sass para poder sincronizar fácilmente valores en los demás .scss.
Todos estos recursos se añaden mediante @import en la hoja de estilos "styles.scss" (ubicada en la misma carpeta "src").

<hr/>

# Features [app]


Cada producto o característica ofrecida por la aplicación se encapsula en forma de módulo en la carpeta "features". Cada módulo contiene todo aquello que únicamente se usa en el contexto del módulo, como servicios, modelos y demás objetos. Por ello, cada módulo podrá contener:
- Models
- Services
- Una página para enlazar con el routing.
- Contenidos de página/s
- Otros elementos que únicamente requiera el módulo en cuestión.

A fin de mantener una diferenciación entre las capas de la aplicación, y también para tener un código más parcelado, concreto, y escalable, es importante que los servicios, el manejo de datos, la actualización de componentes visuales y demás procedimientos habituales de un aplicativo queden bien repartidos entre los 'componentes'* que forman la aplicación (*'componentes' en el sentido más ámplio, es decir, páginas, contenidos, babcn-nnn, ...)

# Breakpoint Service [app]

Véase la [Guía de uso](src/app/services/shared/breakpoint/BreakpointServiceReadme.md)


<hr/>

# BusinessAssistantBCNFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_EN.md) 
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_ES.md) 
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_CA.md) 
