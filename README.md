# EMI Code Challenge

Proyecto para el puesto de desarrollador en el GrupoEMI.

## Pasos para ejecutar el frontend en modo desarrollador por primera vez

Para iniciar el proyecto se deben seguir los siguientes pasos:

1. Tener instalado nvm o npm

- npm (Node Package Manager): Se pueden seguir los pasos de [link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- nvm (Node Version Manager): Se pueden seguir los pasos de [link](https://github.com/nvm-sh/nvm), y ejecutar el comando:

  `nvm install latest`

1. Verificar que se tiene instalado npm, ejecutando el código:

   `npm --version`

1. Ubicarse en la carpeta raíz del proyecto y ejecutar el comando:

   `npm install`

1. Copiar el archivo ubicado en **env** en la carpeta raíz del proyecto y cambiar el nombre a **.env**

1. Configurar las variables de entorno de acuerdo con el proyecto.

- **REACT_APP_STATUS**: Puede ser "dev" o "prod", dependiendo del ambiente
- **REACT_APP_DEV_API_URL**: Link del API para desarrollo
- **REACT_APP_PROD_API_URL**: Link del API para producción

5. Ejecutar el comando:

   `npm start`
