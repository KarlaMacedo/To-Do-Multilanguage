# Lista de Tareas Multilingüe

Esta es una aplicación de lista de tareas que permite a los usuarios agregar, editar y eliminar tareas, además de alternar entre dos idiomas (inglés y español) para mostrar las etiquetas de la interfaz. El cambio de idioma se implementa usando la Context API de React.

## Características

- Añadir nuevas tareas a la lista.
- Editar y eliminar tareas existentes.
- Alternar entre dos idiomas (inglés y español) usando un botón de cambio de idioma.
- Almacenamiento de traducciones y tareas utilizando el Context API de React.

## Tecnologías Utilizadas

- **React**: Librería principal para crear la interfaz.
- **Context API**: Manejador de estado global para el cambio de idioma.
- **CSS**: Para el estilo de la aplicación, incluyendo la alineación del botón de cambio de idioma.
  
## Instalación

Sigue los pasos a continuación para clonar el repositorio y ejecutar el proyecto en tu máquina local.

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

### 2. Navega a la carpeta del proyecto

```bash
cd nombre-del-repositorio
```

### 3. Instala las dependencias

Asegúrate de tener Node.js instalado. Luego, ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias para correr el proyecto.

### 4. Inicia el proyecto

```bash
npm start

```
Esto abrirá la aplicación en tu navegador en http://localhost:3000.

## Uso
- **Agregar Tareas**: Escribe una tarea en el campo de entrada y haz clic en "Agregar".
- **Editar/Eliminar Tareas**: Haz clic en "Editar" para modificar una tarea o "Eliminar" para quitarla de la lista.
- **Cambiar Idioma**: Haz clic en el botón "Cambiar Idioma" (Toggle Language) para alternar entre inglés y español.

## Estructura del Proyecto
```
📁 src
 ┣ 📁 components
 ┃ ┣ 📄 TodoList.js          # Componente que maneja la lista de tareas
 ┃ ┣ 📄 LanguageToggle.js    # Componente del botón de cambio de idioma
 ┃ ┗ 📄 TaskForm.js          # Componente para añadir nuevas tareas
 ┣ 📄 App.js                 # Componente principal que contiene la lógica
 ┣ 📄 index.js               # Archivo de entrada de la aplicación
 ┗ 📄 App.css                # Archivo de estilos para la aplicación
```

## Explicación de Componentes
- **App.js**: El componente principal que integra el contexto del idioma y muestra la lista de tareas.
- **TodoList.js**: Maneja las operaciones CRUD (agregar, editar y eliminar) sobre las tareas.
- **LanguageToggle.js**: Un botón que cambia el idioma de la interfaz entre inglés y español.
- **TaskForm.js**: Formulario para agregar nuevas tareas.


