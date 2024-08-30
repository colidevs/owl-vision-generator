# Owl Vision Generator

Un script para enviar peticiones que simulan el reconocimiento 
de una persona en tu cliente Owl Vision.

## Requerimientos
- [pnpm](https://pnpm.io/installation)
- [node >= 20.17.0](https://nodejs.org/en)

## Instalación
1. Clonar repositorio
2. Moverse al directorio donde se clono el repositorio `cd owl-vision-generator`
3. Abrir la consola e instalar dependencias con el comando `pnpm install`

## Utilización
Ejecutar el siguiente comando para iniciar el generador:
`pnpm start`

## Funcionamiento
1. Toma el archivo `mock.json`
2. Ejecuta peticiones `POST` a `http://localhost:3000/api` cada `2000ms`

### TODO
- Generar un archivo de configuracion para el script (settings.json)
