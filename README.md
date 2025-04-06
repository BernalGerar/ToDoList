# 🧠 Task API - Backend

Este es el **servidor backend** para la aplicación de tareas. 
Fue desarrollado con **Node.js** y **Express**, y está preparado para 
conectarse con un frontend desarrollado en React.

## 🚀 ¿Qué hace este backend?

- Guarda tareas con título, descripción y estado (`completado` o no).
- Permite crear, eliminar y editar tareas.
- Evita agregar tareas duplicadas (opcional).
- Protege las rutas para que solo el frontend autorizado pueda hacer solicitudes.

---

## ⚙️ Variables de entorno

Para ejecutar el servidor correctamente, necesitás definir dos variables de entorno:

```bash
PORT=3000
FRONTEND_URL=http://localhost:3000

PORT: Si no definís `PORT`, el servidor elegirá 
un **puerto aleatorio disponible** y lo imprimirá en la consola.

✅ ¡Estate atento a la consola! Ahí verás en qué puerto quedó corriendo tu API. 

FRONTEND_URL: URL de tu aplicación de React (por defecto, es `http://localhost:3000`).

📌 Podés definir estas variables en un archivo `.env`, o directamente 
al ejecutar el servidor con:

```bash
PORT=3000 FRONTEND_URL=http://localhost:3000 node index.js

---

## 🧩 Validación de duplicados (opcional)

El backend incluye una función **opcional** llamada `TareaYaAgregada` que 
impide registrar tareas duplicadas, según su **título y descripción**.

### 🔎 ¿Qué considera como duplicado?

- Ignora **mayúsculas/minúsculas** (`"Tarea"` es igual a `"tarea"`).
- **No distingue** acentos ni signos de puntuación, como comas o 
puntos (`"Tarea número 1"` es igual a `"tarea numero 1"`).

### ⚙️ ¿Cómo activarla o desactivarla?

En el archivo donde definís tus rutas (`router.js`, por ejemplo), podés incluir o quitar la función de esta manera:

```js
// ✅ Con validación de duplicados
router.post("/api/tasks", CuerpoVacio, TareaYaAgregada, CrearTarea);

// 🔓 Sin validación de duplicados
router.post("/api/tasks", CuerpoVacio, CrearLista);

---

## 🏁 Inicio rápido

1. **Cloná este repositorio:**

```bash
git clone https://github.com/BernalGerar/ToDoList.git
cd nombre-del-repo

---

## 🛠 Instalación y ejecución

### 🔧 Instalá las dependencias

```bash
npm install

---

## 🚀 Ejecutá el servidor

Asegurate de tener configuradas las variables de 
entorno antes de correr el servidor. 
Podés hacerlo directamente desde la consola así:

```bash
PORT=1010 FRONTEND_URL=http://localhost:3000 node index.js

🧠 **Podés reemplazar el número de puerto o la URL 
según lo que necesite tu entorno local o de producción.**

## 🌐 Configuración del Frontend (React)

Para conectar tu aplicación React con el backend, creá 
un archivo `.env` en la raíz del proyecto React 
(al mismo nivel que `package.json`), con la siguiente variable:

```env
REACT_APP_API_URL=http://localhost:1010

📌 Cambiá el número de puerto si tu servidor está corriendo en otro distinto.

## 🧪 Testeo con Postman durante el desarrollo

Durante el desarrollo se utilizó **Postman** para 
testear las rutas del backend y verificar que las tareas 
se estaban creando y listando correctamente desde el frontend (React).

### 🔍 ¿Cómo ver las tareas en tiempo real?

Podés hacer una solicitud **GET** en Postman al siguiente endpoint:

```bash
http://localhost:[PUERTO_CONFIGURADO]/api/tasks

📌 **Recordá:** el puerto puede variar según lo que 
definiste en tu variable de entorno `PORT`.  
Si no configuraste uno, el servidor elegirá 
un **puerto aleatorio disponible** y lo imprimirá en la consola al iniciar.
