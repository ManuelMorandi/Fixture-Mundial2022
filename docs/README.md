# Informe académico entrega 1

Fecha de entrega: 3/oct/2022

## Repositorio Git

---

### Creación y uso de repositorios locales y remotos

Para iniciar a trabajar en Git es necesario la creación de un repositorio local y remoto. Al inicializar el git estaremos creando un repositorio local en el que trabajar en nuestra computadora. 

Los archivos creados en este repositorio local se encontrarán en la “working area” (si nos fijamos en el estado del git no nos aparecerá ningún archivo). Aquí es donde trabajaremos en los archivos y haremos las modificaciones necesarias. 

Luego, al terminar de trabajar en el archivo lo pasaremos a la “staging area” (en el estado del git se encontrará el nombre del archivo en rojo). Aquí es donde estarán los archivos prontos para hacer el commit. Por ultimo, se confirma el commit (en el estado del git se encontrará el nombre del archivo en verde).

Para subir nuestros cambios a la nube debemos tener un repositorio remotr. Para crearlo se requiere entrar en [https://github.com](https://github.com/). Aquí seleccionaremos la opción “create a new repository”, se llenan los campos obligatorios y selecciona el botón verde “create repository”. Una vez creado el repositorio remoto será necesario enlazar el repositorio local con el mismo para poder subir los cambios.

Todos los comandos fundamentales para realizar las acciones recién detalladas se encuentran en el siguiente ítem.

### Comandos Git ejecutados desde terminal y desde el IDE

- Configuración de la información del usuario utilizada en todos los repositorios locales
    - `git config --global user.name “<nombre apellido>”` → establece un nombre que sea identificable para cuando se revise el historial de versiones.
    - `git config --global user.email “<email>”` → establece una dirección de correo electrónico.
- Inicialización y clonación de repositorios
    - `git init` → inicializa un directorio existente como repositorio Git.
    - `git clone <url>` → clona un repositorio desde una ubicación alojada a través de una URL.
- Trabajar con snapshots y el área de preparación de Git
    - `git status` → Muestra el estado del repositorio local y los archivos, es decir, si fueron modificados, eliminados, agregados o si está al día.
    - `git add <archivo>` → agrega un archivo a la etapa del “staging area”.
    - `git reset <archivo>` → quita el archivo de la etapa del “staging area”.
    - `git diff` → Muestra los cambios pero de lo que NO está en la “staging area”.
    - `git diff --staged` → Muestra los cambios pero de lo que está en la “staging area”.
    - `git commit -m "<mensaje descriptivo>"` → Sube los archivos de la staging area al repositorio remoto
    - `git push` →
- Utilizar ramas, cambiar el contexto e integrar los cambios
    - `git branch` → Muestra las branch existentes
    - `git branch <nombre de la rama>` → Crea la branch con el nombre escrito
    - `git checkout` → Se mueve de branch
    - `git merge <rama>` → Junta la rama en la cual nos encontramos con la rama escrita
- Examinar los registros, los diffs y la información de los objetos
    - `git log` → Muestra el historial de comandos
    - `git log branchB..branchA` →
    - `git log --follow <archivo>` →
    - `git diff branchB..branchA` →
    - `git show <SHA>` →
- Recuperación de las actualizaciones de otro repositorio y actualización de los repos locales
    - `git remote add <alias> <url>` →
    - `git fetch <alias>` →
    - `git pull` →
- Versionar las eliminaciones de archivos y los cambios de ruta
    - `git rm <archivo>` →
    - `git mv <ruta existente> <nueva ruta>` →
    - `git log --stat -M` →
- Reescribir ramas, actualizar commits y borrar el historial
    - `git rebase <rama>` →
    - `git reset --hard <commit>` →
    - `git log --stat -M` →

## Versionado

---

### Buenas prácticas de versionado

Para poder llevar un control del versionado de manera prolija, se usara Git como herramienta. Así mismo, se hará uso de GitHub para tener acceso a un repositorio remoto, haciendo que todos los miembros del equipo, así como los profesores, tengan acceso para modificar y ver el progreso.

Los commits realizados llevarán un formato específico. Esto los hace más entendibles y mnemotécnicos. Las reglas a seguir serán las del “conventional commit”. En otras palabras, se implementaran commits con nombre de la forma <TIPO>: Descripción. El tipo podrá ser uno de dos: feat, para cuando se trate de una nueva funcionalidad; o fix, si es un commit que arregla un error o bug antes presente. Cabe destacar que no usamos todas las reglas propuestas de conventional commit y que usamos solo las que nos resultan más pertinentes.

También se seguirán ciertas reglas para las ramas, que serán explicadas a continuación.

### Uso de ramas separadas de 'main'

Para asegurar el correcto funcionamiento del producto, se trabajaran con múltiples ramas. Al implementar sobre nuestra versión estable nuevas funcionalidades, estas deberán pasar por un proceso de construcción, prueba y optimización, con el objetivo de llegar al mejor producto final posible. Debido a esto, se usan distintas ramas de desarrollo para poder llevar las distintas versiones de manera prolija y entendible. 

La rama principal es la “main”, en la que se llevaran todas las versiones estables. Al iniciar el desarrollo de una nueva función, se creará una nueva rama saliente de main, la rama “develop”, en la que iremos archivando las versiones de desarrollo. 

Esta rama dev podría generar otras ramas a la hora de implementar varias funcionalidades. Principalmente, podríamos ver dos tipos distintos de rama de dev: 1) La rama de feature, en la que se desarrolla una función específica del sistema. Una vez terminado el desarrollo de esta función, esta rama se integra a develop. 2) La rama release es aquella que sale de develop y se crea al acercarse a una versión estable. Se usa para corregir bugs y desarrollar la documentación. Una vez finalizado, se integra con la main.

Al llegar a una nueva versión estable en la rama develop, esta se integra con la main. De esta manera, se logra tener un espacio de trabajo en la rama develop, mientras que la última versión estable estará siempre al alcance, como el último commit de la rama main.

### Resumen de commits y evolución del proyecto

## Elicitación

---

### Evidencia de actividades de investigación

### Referencias a fuentes de información

### Caracterización de usuarios: User Personas

### Modelo conceptual del problema

## Especificación

---

### Definición de requerimientos funcionales y no funcionales

### User Stories / Use Cases detallados

### Bocetos de IU

## Validación y verificación

---

### Verificar la especificación

### Validar la solución con personas no involucradas en el proyecto

## Reflexión

---

### Detalle del trabajo individual

### Técnicas aplicadas y aprendizajes

## Referencias

---

[](https://education.github.com/git-cheat-sheet-education.pdf)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[Buenas prácticas al trabajar con Git](https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/buenas-practicas-al-trabajar-con-git.html)