<h1 align="center">E-Restaurant</h1>
<h1 align="center">Ordenes en tiempo real</h1>

## Tabla de Contenidos:
---
- [Problemática](#problemática)
- [Aplicaciones Similares](#aplicaciones-similares)
- [Propósito del Proyecto](#propósitodelproyecto)
- [Tecnologías Usadas](#tecnología-usadas)
- [Características](#características)
- [Instalación](#instalación)
- [Interfaz del Proyecto](#interfaz-del-proyecto)
---
## Problemática:

En la mayoría de restaurantes tanto como el servicio al cliente como la organización interna de la preparación tienen un funcionamiento antiguo. En una época donde la tecnología puede suplir muchas labores, ofrecemos un sistema automático de órdenes en tiempo real. 
El sistema no solo permitirá a los usuarios realizar órdenes desde nuestra web sino que también ayudará con funciones de administración de las órdenes, del menú y los platos solicitados. Teniendo un control automtizado de las órdenes de los usuarios, se puede tomar medidas para ir preprando platos de antemano y de igual manera prepararse para otros días.

## Aplicaciones Similares:
- [Restaurant.pe](https://restaurant.pe/).
- [Mesa247](https://www.mesa247.pe/).

## Propósito del Proyecto

E-Restaurant busca proporcionar una solución eficiente y conveniente para las órdenes de un restaurant y su administración, simplificando el proceso tanto para los usuarios como para los restaurantes. En este contexto tambien el software tiene como posibles metas:

**a) Mejorar la experiencia del usuario:** Al ser un sistema virtual de órdenes a través de la web, los usuarios no necesitan realizar cola, estar esperando por el menúd del restaurante.

**b) Mejorar la administración:** BusGO podra integrar los horarios y precios de múltiples compañías de autobuses, brindando a los usuarios una plataforma única desde la cual puedan comparar y elegir entre diferentes opciones. Esto simplificaría el proceso de búsqueda y permitiría una toma de decisiones más informada.

**c) Ofrecer servicios adicionales:** Además de la venta de pasajes, BusGO podría proporcionar servicios complementarios, como la reserva de asientos, la emisión de boletos electrónicos, la notificación de cambios en los horarios de los autobuses, la visualización de rutas y paradas, entre otros. Estos servicios adicionales mejorarían la experiencia del usuario y agregarían valor a la plataforma.


# E-restaurant  
Para que puedan ejecutar siga las siguientes instrucciones:

## Instalar Node.js
Descargar e instalar Node.js desde su página oficial: https://nodejs.org/es/

## Clonar el repositorio
```
git clone https://github.com/eluqm/IS-3grupo3-2023
```

## Ubicarse en la carpeta del proyecto
```
cd IS-3grupo3-2023
```

## Instalar dependencias
```
npm install
```

### Compilar y ejecutar el proyecto
```
npm run serve
```

# Requisitos y Especificación de Software

## Requisitos Funcionales
- RF1: El sistema debe permitir a los usuarios registrarse en el sistema.
- RF2: El sistema debe permitir a los usuarios iniciar sesión en el sistema.
- RF3: El sistema debe permitir a los usuarios recuperar su contraseña.
- RF4: El sistema debe permitir a los usuarios modificar su información personal.
- RF5: El sistema debe permitir a los usuarios realizar pedidos.
- RF6: El sistema debe permitir a los usuarios cancelar pedidos.
- RF7: El sistema debe permitir a los usuarios ver el estado de sus pedidos.
- RF8: El sistema debe permitir a los usuarios ver el historial de sus pedidos.
- RF9: El sistema debe permitir al personal del restaurante llevar el control de las órdenes de los clientes.
- RF10: El sistema debe permitir proporcionar una interfaz interactiva y fácil para que los clientes realicen sus pedidos.
- RF11: El sistema debe permitir al personal del restaurante llevar el control de los productos.

## Requisitos No Funcionales
- RNF1: El sistema debe ser fácil de usar y entender tanto para el personal del restaurante como para los clientes.
- RNF2: El sistema debe ser seguro y confiable.
- RNF3: El sistema debe ser escalable para adaptarse a las necesidades futuras del restaurante.
- RNF4: El sistema debe ser compatible con diferentes dispositivos y sistemas operativos.
- RNF5: El sistema debe ser fácil de integrar con otras herramientas y sistemas utilizados por el restaurante.

## Casos de prueba
| Caso de prueba | Entrada | Resultado esperado |
| ---------------------- | ------- | ------------------ |
| Envio de orden exitoso | Cantidad = < cantidad definida | La orden se envia correctamente y sin ningun error. \n La orden llega al dashboard del admin correctamente y se posiciona en el estado de espera | 
                              
## Especificación de Software 

### Diagrama de Casos de Uso
[![Diagrama de Casos de Uso](https://live.staticflickr.com/65535/52989712163_f9c988435d_b.jpg)](https://flic.kr/p/2kXZ3ZS)
### Diagrama de Base de Datos
[![Diagrama de Base de Datos](https://live.staticflickr.com/65535/52972566443_0437bd0ec0_c.jpg)](https://flic.kr/p/2kV5Z6E)

### Enlace al documento de la especificación de software:

https://docs.google.com/document/d/1SBNQK50c0LKwlEgL9AztEQENZGwrK6vx/edit?usp=sharing&ouid=116425282052983963021&rtpof=true&sd=true
