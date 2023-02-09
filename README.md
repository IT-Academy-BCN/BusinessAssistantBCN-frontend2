# Business Assistant Barcelona Frontend Project


### Diseño / maquetación

- **Resources/BusinessAssistantBarcelona_design.pdf**
- **Resources/AdobeXD_templates/BusinessAssistantBarcelona.xd**

Necesario instalar [Adobe Creative Cloud](https://creativecloud.adobe.com/apps/download/creative-cloud)

### Instalaciones necesarias

- Angular CLI 13.0.2

### Fake Server

- JSON Server. Tras clonar el repositorio, es necesario ejecutar (dentro de la folder fake-json-server):
* **git submodule init**
* **git submodule update**

- Para iniciar el servidor, es necesario ejecutar el comando **npm run api** dentro del folder  BusinessAssistantBCN-frontend2

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

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_EN.md) 
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_ES.md) 
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT_CA.md) 
