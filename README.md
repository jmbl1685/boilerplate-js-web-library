# 馃梻 Boilerplate Javascript web library

## 驴Qu茅 es esto?

Es un estructura completa para crear librerias de Javascript utilizando todos los "poderes" que provee Typescript, en esta ocasi贸n para la demostraci贸n se utiliz贸 la plantilla predefinida (boilerplate) para crear una libreria muy b谩sica para mostrar mensajes en consola y/o construirlos en el DOM.

La idea es que puedas usarlo y sacarle provecho, y si lo ves necesario en alg煤n contexto donde se requiera... 隆Pon lo en acci贸n!

Tener en cuenta: Puede ser instalado (opcional) como modulo NPM o importar tu script generado en tu index.html ya sea nativo o en los diferentes frameworks de Javascript (Angular, React, Vue, etc)

```html
<script src="https://boilerplate-js-web-library.vercel.app/sample.min.js"></script>
```

## 驴C贸mo funciona?

Pues simple, lo primero que debes tener instalado es obviamente Node.js, luego ejecutar `npm install` y luego `npm run dev`

Lo que acabas de hacer a continuaci贸n es construir la libreria en tu maquina local y ejecutar un servidor muy r谩pidamente (Puerto: 3001) para visualizar en funcionamiento todo lo mencionado anteriormente.

En este punto deberias ver lo siguiente:

<p align="left">
  <img src="https://i.ibb.co/3RBLjQb/004.png">
</p>

Ruta:

```
$ boilerplate-js-web-library\src\lib\**\**.ts
```

Cada cambio que realices en tus archivos/l贸gica escrita en Typescript ser谩 exportado en la carpeta "library" automaticamente.

```
$ boilerplate-js-web-library\library
```

<p align="left">
  <img src="https://i.ibb.co/7rd4FTv/001.png">
</p>

C贸digo escrito:

<p align="left">
  <img src="https://i.ibb.co/nfn0dJQ/002.png">
</p>

C贸digo transpilado:

<p align="left">
  <img src="https://i.ibb.co/PzjVLCX/003.png">
</p>

Resultado del ejemplo:

https://boilerplate-js-web-library.vercel.app

<p align="left">
  <img src="https://i.ibb.co/xqS3v47/005.png">
</p>

<p align="left">
  <img src="https://i.ibb.co/0cCCW8C/006.png">
</p>

<p align="left">
  <img src="https://i.ibb.co/g6yyfRN/007.png">
</p>

## 驴En que casos puedo usarlo?

Creaci贸n de boton OAuth 2.0 para compartir con tu cliente (tercero)

- https://developers.google.com/identity/sign-in/web/build-button

Creaci贸n de SDK Web para que tus clientes lo implementen en sus aplicaciones/sitios web

- https://stripe.com/docs/terminal/sdk/js

- https://plaid.com/docs/link/web

- https://developer.paypal.com/docs/integration/paypal-here/sdk-dev/web/

Entre otros, a su criterio...

NOTA: Tenga en cuenta que se omiti贸 la parte de test unitarios puesto que es libre de utilizar la libreria de su preferencia.
