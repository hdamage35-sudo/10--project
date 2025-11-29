# README — WebSocket Demo (NestJS)

```md
# WebSocket Demo — NestJS

Proyecto simple que demuestra la comunicación:

**UserA → HTTP → Backend → WebSocket → UserB**

El backend recibe un mensaje por un endpoint HTTP y lo reenvía a un canal WebSocket usando Socket.io.

---

## Tecnologías
- NestJS  
- Socket.io  
- Typescript  

## Endpoint HTTP
**POST** `/realtime/send`

Body:
```json
{
  "channel": "chat",
  "message": "Hola"
}
````
---

## WebSocket

El Gateway emite mensajes al canal indicado usando:

```ts
this.server.emit(channel, message);
```

El cliente se conecta con:

```js
const socket = io("http://localhost:3000");
socket.on("chat", msg => console.log(msg));
```

---

## Frontend de prueba

Archivo: `public/index.html`

Incluye:

* Input de texto
* Botón para enviar
* Lista con mensajes recibidos en tiempo real

---

##  Cómo ejecutar

```bash
npm install
npm run start:dev
```

Luego abre `public/index.html` en el navegador.

---

## Resultado esperado

1. El usuario escribe un mensaje en el front.
2. Se envía por HTTP al backend.
3. El backend lo reenvía por WebSocket.
4. El mensaje aparece en la lista en tiempo real.

```
WS recibido: Hola
```

---

## Prueba desde el backend.
Puedes probarlo desde postman simplemente conectando en la consola del navegador (F12), primero cargamos:
let s = document.createElement("script");
s.src = "https://cdn.socket.io/4.7.2/socket.io.min.js";
document.head.appendChild(s);
Luego de eso nos conectamos al wbsocket:
socket.on("chat", (msg) => console.log("WS recibió:", msg));
y hacemos una peticion en postman:
{
  "channel": "chat",
  "message": "Hola desde HTTP"
}

## Estado

Proyecto completo y funcionando.
