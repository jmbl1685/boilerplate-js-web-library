# 🗂 Boilerplate Javascript web library

## ¿Qué es esto?

Es un estructura completa para crear librerias de Javascript utilizando todos los beneficios que provee Typescript, en esta ocasión para la demostración se implementó en una libreria muy básica para mostrar mensajes en consola y/o construirlos en el DOM.

La idea es que puedas emplearlo y sacarle provecho, y si lo ves necesario en algún contexto donde se requiera... ¡Pon lo en acción!

Tener en cuenta: Puede ser instalado (opcional) como modulo NPM y usarse en los diferentes frameworks de Javascript (Angular, React, Vue, etc)

## ¿Cómo funciona?

Pues simple, lo primero que debes tener instalado es obviamente Node.js, luego ejecutar `npm install` y luego `npm run dev`

Lo que acabas de hacer a continuación es construir la libreria en tu maquina local y ejecutar un servidor muy rápidamente (Puerto: 3001) para visualizar en funcionamiento todo lo mencionado anteriormente.

En este punto deberias ver lo siguiente:

<p align="left">
  <img src="https://i.ibb.co/3RBLjQb/004.png">
</p>

Ruta:

```
$ boilerplate-js-web-library\src\lib\**\**.ts
```

Cada cambio que realices en tus archivos/lógica escrita en Typescript será exportado en la carpeta "library" automaticamente.

```
$ boilerplate-js-web-library\library
```

<p align="left">
  <img src="https://i.ibb.co/7rd4FTv/001.png">
</p>

Código escrito:

<p align="left">
  <img src="https://i.ibb.co/nfn0dJQ/002.png">
</p>

Código transpilado:

<p align="left">
  <img src="https://i.ibb.co/PzjVLCX/003.png">
</p>

Resultado:

<p align="left">
  <img src="https://i.ibb.co/xqS3v47/005.png">
</p>

<p align="left">
  <img src="https://i.ibb.co/0cCCW8C/006.png">
</p>

<p align="left">
  <img src="https://i.ibb.co/g6yyfRN/007.png">
</p>

## Casos de uso (ejemplos)

Creación de boton OAuth 2.0 para compartir con tu cliente (tercero)

- https://developers.google.com/identity/sign-in/web/build-button

Creación de SDK Web para que tus clientes lo implementen en sus aplicaciones/sitios web

- https://stripe.com/docs/terminal/sdk/js

- https://plaid.com/docs/link/web

- https://developer.paypal.com/docs/integration/paypal-here/sdk-dev/web/

NOTA: Tenga en cuenta que se omitió la parte de test unitarios puesto que es libre de utilizar la libreria de su preferencia.
