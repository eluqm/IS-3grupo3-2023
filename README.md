<h1 align="center">E-Restaurant</h1>
<h1 align="center">Ordenes en tiempo real</h1>

## Tabla de Contenidos:
---
- [Problemática](#problemática)
- [Aplicaciones Similares](#aplicaciones-similares)
- [Propósito del Proyecto](#propósitodelproyecto)
- [Tecnologías Usadas](#tecnología-usadas)
- [Instalación](#instalación)
- [Requisitos y Especificación de Software](#características)
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

**b) Mejorar la administración:** El sistema nos permite recibir las órdenes y ver el estado en el que se encuentran, pasando cada orden por los estados, en espera, en preparación, listas y entregadas.

**c) Manejo de un Menú:** Adicionalmente el sistema permite manejar el menú actualizando en tiempo real cuales son los platos listos, de esta manera los clientes pueden hacer órdenes de platos que tienen poco tiempo de preparación o que ya se encuentran listos.


## Instalación
Para que puedan ejecutar siga las siguientes instrucciones:

### Instalar Node.js
Descargar e instalar Node.js desde su página oficial: https://nodejs.org/es/

### Clonar el repositorio
```
git clone https://github.com/eluqm/IS-3grupo3-2023
```

### Ubicarse en la carpeta del proyecto
```
cd IS-3grupo3-2023
```

### Instalar dependencias
```
npm install
```

### Compilar y ejecutar el proyecto
```
npm run serve
```

## Requisitos y Especificación de Software

### Requisitos Funcionales
- RF1: El sistema debe permitir a los usuarios observar los platos disponibles del momento.
- RF2: El sistema debe permitir a los usuarios realizar órdenes.
- RF3: El sistema debe permitir a los usuarios recibir una respuesta sobre la orden.
- RF8: El sistema debe permitir al administrador ver el historial de las órdenes.
- RF8: El sistema debe permitir al administrador ver el estado de las órdenes.
- RF8: El sistema debe permitir al administrador cambiar el estado de las órdenes.
- RF8: El sistema debe permitir al administrador ver la frecuencia de los platos.
- RF8: El sistema debe permitir al administrador actualizar el menu en funcionamiento.
- RF8: El sistema debe permitir al administrador habilitar y deshabilitar órdenes para el cliente.

## Requisitos No Funcionales
- RNF1: El sistema debe ser fácil de usar y entender tanto para el personal del restaurante como para los clientes.
- RNF2: El sistema debe ser seguro y confiable.
- RNF3: El sistema debe ser escalable para adaptarse a las necesidades futuras del restaurante.
- RNF4: El sistema debe ser compatible con diferentes dispositivos y sistemas operativos.
- RNF5: El sistema debe ser fácil de integrar con otras herramientas y sistemas utilizados por el restaurante.

## Casos de prueba
| Caso de prueba | Entrada | Resultado esperado |
| ---------------------- | ------- | ------------------ |
| Envio de orden exitoso | Cantidad de platos = < cantidad definida | La orden se envia correctamente y sin ningun error.  La orden llega al dashboard del admin correctamente y se posiciona en el estado de espera | 
| Envio de orden erroneo | Cantidad de platos > = cantidad definida | La orden no se envia y aparece un error de cantidad inadecuada . El usuario puede volver a seleccionar la cantidad que desea. |
| Envio de orden simultaneo | Cantidad de platos adecuada | La primera orden que llega es la se efectua y la segunda si la cantidad de platos es correcta tambien . En caso la segunda orden no cumpla con la cantidad debido a la primera esta es rechazada | 
| Guardado de menu exitoso | Cantidad de cada plato > 0 | El menu se guarda correctamente . El menu se muestra en la pantalla de inicio del usuario . |
| Guardado de menu erroneo | Cantidad de cada plato < 0 | El menu no se guarda correctamente y muestra error de cantidad de plato erronea . El admin debe modificar la cantidad a una correcta. | 


## Casos de prueba
| Caso de prueba | Entrada | Resultado esperado |
| ---------------------- | ------- | ------------------ |
| Enviar orden | - Usuario selecciona platos, - Seleciona mesa y cantidad menor al menu disponible, - Envia orden| El usuario recibe un mensaje de aceptación. - La orden llega al dashboard del admin correctamente y se posiciona en el estado de espera | 

| Enviar orden | - Usuario selecciona platos, - Seleciona mesa y cantidad mayor al menu disponible, - Envia orden| El usuario recibe un mensaje de rechazo. - La orden no llega al dashboard | 

| Enviar orden | - Dos usuarios seleccionan la misma orden, - Los usuarios seleccionan la cantidad adecuada, - El primer usuario envia la orden, El segundo usuario envia la orden | El primer usuario recibe un mensaje de aceptación, - El segundo usuario recibe un mensaje de rechazo |

| Enviar orden | - Dos usuarios seleccionan la misma orden, - Los usuarios seleccionan la cantidad adecuada, - El primer usuario envia la orden, El segundo usuario aun no envia la orden | El primer usuario recibe un mensaje de aceptación, - Desaparece la orden en la lista del segundo usuario |

|  Activar menú | - El administrador selecciona un menu | El menu se guarda correctamente . El menu se muestra por pantalla . |

|  Activar menú | - El administrador selecciona un menu, - El administrador habilita un menú, - El administrador selecciona un menú | El sistema no permite seleccionar otro menú cuando ya tiene uno activado con al meno un plato activado. |

|  Activar menú | - El administrador selecciona un menu, - El administrador habilita un menú, -El administrador desahilita un menú, - El administrador selecciona un menú | El menu se guarda correctamente . El menu se muestra por pantalla . |

|  Activar plato | - El administrador selecciona la cantidad de un plato, - El administrador habilita un plato | El plato se guarda correctamente. La orden se muestra por pantalla al cliente |

|  Desactivar plato | - El administrador inahabilita un plato | El plato desparece de la pantalla del cliente |


## Especificación de Software 

### Diagrama de Casos de Uso
[![Diagrama de Casos de Uso](https://live.staticflickr.com/65535/52989712163_f9c988435d_b.jpg)](https://flic.kr/p/2kXZ3ZS)
### Diagrama de Base de Datos
[![Diagrama de Base de Datos](https://live.staticflickr.com/65535/52972566443_0437bd0ec0_c.jpg)](https://flic.kr/p/2kV5Z6E)
![image](https://github.com/eluqm/IS-3grupo3-2023/assets/82822546/171330b5-fcdb-46c6-9368-6d1ed5bcd9d3)

### Enlace al documento de la especificación de software:

https://docs.google.com/document/d/1SBNQK50c0LKwlEgL9AztEQENZGwrK6vx/edit?usp=sharing&ouid=116425282052983963021&rtpof=true&sd=true
