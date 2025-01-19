# Requisitos para Correr el Servidor

Para ejecutar el servidor localmente, se debe de cumplir con los siguientes requisitos:

- **Node.js**: Asegúrate de tener Node.js instalado. La versión utilizada en este proyecto es la 20.12.2.
- **Docker**: Es necesario tener Docker instalado para levantar los contenedores del proyecto.
- **Contenedores Docker necesarios**:
  - PostgreSQL: `docker pull postgres:15.3`
  - pgAdmin 4 (opcional): `docker pull dpage/pgadmin4`

# Pasos para Inicializar el Proyecto

1. **Instalar dependencias:**
    ```sh
    npm install
    ```

2. **Levantar contenedores Docker:**
    ```sh
    cd .devcontainer
    docker compose up -d
    ```

3. **Reemplazar las creedenciales por las suyas propias en el .env:**

4. **Sincronizar la base de datos con el schema propuesto:**
    ```sh
    npx prisma migrate dev --name init
    ```

# Bienvenido al coding-interview-backend-level-3

## Descripción
Este proyecto es una API REST que permite realizar operaciones CRUD sobre una entidad de tipo `Item`.

La entidad tiene 3 campos: `id`, `name` y `price`.

Tu tarea es completar la implementación de toda la funcionalidad de forma tal de que los tests e2e pasen exitosamente.

### Que puedes hacer: 
- ✅ Modificar el código fuente y agregar nuevas clases, métodos, campos, etc.
- ✅ Cambiar dependencias, agregar nuevas, etc.
- ✅ Modificar la estructura del proyecto (/src/** es todo tuyo)
- ✅ Elegir una base de datos
- ✅ Elegir un framework web
- ✅ Cambiar la definición del .devContainer


### Que **no** puedes hacer:
- ❌ No puedes modificar el archivo original /e2e/index.test.ts (pero puedes crear otros e2e test si lo deseas)
- ❌ El proyecto debe usar Typescript 
- ❌ Estresarte 🤗


## Pasos para comenzar
1. Haz un fork usando este repositorio como template
2. Clona el repositorio en tu máquina
3. Realiza los cambios necesarios para que los tests pasen
4. Sube tus cambios a tu repositorio
5. Avísanos que has terminado
6. ???
7. PROFIT

### Cualquier duda contactarme a https://www.linkedin.com/in/andreujuan/
