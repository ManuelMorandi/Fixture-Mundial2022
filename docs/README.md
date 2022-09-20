# Informe académico entrega 1

Fecha de entrega: 03-oct-2022

## Repositorio Git

### Creación y uso de repositorios locales y remotos

Para iniciar a trabajar en Git es necesario la creación de un repositorio local y remoto. Al inicializar el git estaremos creando un repositorio local en el que trabajar en nuestra computadora.

Los archivos creados en este repositorio local se encontrarán en la “working area” (si nos fijamos en el estado del git no nos aparecerá ningún archivo). Aquí es donde trabajaremos en los archivos y haremos las modificaciones necesarias. 

Luego, al terminar de trabajar en el archivo lo pasaremos a la “staging area” (en el estado del git se encontrará el nombre del archivo en rojo). Aquí es donde estarán los archivos prontos para hacer el commit. Por ultimo, se confirma el commit (en el estado del git se encontrará el nombre del archivo en verde).

Para subir nuestros cambios a la nube debemos tener un repositorio remoto. Para crearlo se requiere entrar en [GitHub](https://github.com/). Aquí seleccionaremos la opción “create a new repository”, se llenan los campos obligatorios y selecciona el botón verde “create repository”. Una vez creado el repositorio remoto será necesario enlazar el repositorio local con el mismo para poder subir los cambios.

Todos los comandos fundamentales para realizar las acciones recién detalladas se encuentran en el siguiente ítem.

### Comandos Git ejecutados desde terminal y desde el IDE

- Configuración de la información del usuario utilizada en todos los repositorios locales
    - `git config --global user.name “<nombre apellido>”` → Establece un nombre que sea identificable para cuando se revise el historial de versiones.
    - `git config --global user.email “<email>”` → Establece una dirección de correo electrónico.
- Inicialización y clonación de repositorios
    - `git init` → Inicializa un directorio existente como repositorio Git.
    - `git clone <url>` → Clona un repositorio desde una ubicación alojada a través de una URL.
- Trabajar con snapshots y el área de preparación de Git
    - `git status` → Muestra el estado del repositorio local y los archivos, es decir, si fueron modificados, eliminados, agregados o si está al día.
    - `git add <archivo>` → Agrega un archivo a la etapa del “staging area”.
    - `git reset <archivo>` → Quita el archivo de la etapa del “staging area”.
    - `git diff` → Muestra los cambios pero de lo que NO está en la “staging area”.
    - `git diff --staged` → Muestra los cambios pero de lo que está en la “staging area”.
    - `git commit -m "<mensaje descriptivo>"` → Confirma y prepara los cambios que se hicieron para subirlos al repositorio remoto.
    - `git push` → Sube los archivos de la staging area al repositorio remoto.
- Utilizar ramas, cambiar el contexto e integrar los cambios
    - `git branch` → Muestra las ramas existentes.
    - `git branch <nombre de la rama>` → Crea la rama con el nombre escrito.
    - `git checkout` → Se mueve de branch.
    - `git merge <rama>` → Junta la rama en la cual nos encontramos con la rama escrita.
- Examinar los registros, los diffs y la información de los objetos
    - `git log` → Muestra el historial de comandos.
    - `git log branchB..branchA` → Muestra los commits de la ramaA que no están en la ramaB.
    - `git log --follow <archivo>` → Muestra los commits que cambiaron el archivo, incluso a través de los renombramientos.
    - `git diff branchB...branchA` → Muestra la diferencia de lo que está en la ramaA que no está en la ramaB.
    - `git show <SHA>` → Muestra cualquier objeto en Git en formato legible para el ser humano.
- Recuperación de las actualizaciones de otro repositorio y actualización de los repos locales
    - `git remote add <alias> <url>` → Añade una URL de git como alias.
    - `git fetch <alias o url>` → Obtiene todas las ramas del Git remoto.
    - `git pull` → Obtiene y fusiona los commits del repositorio remoto, con el local.
- Versionar las eliminaciones de archivos y los cambios de ruta
    - `git rm <archivo>` → Elimina el archivo del proyecto y prepara la eliminación para el siguiente commit.
    - `git mv <ruta existente> <nueva ruta>` → Renombra y/o cambia la ruta un archivo existente.
    - `git log --stat -M` → Muestra todos los registros de commit con indicación de las rutas que se han movido.
- Reescribir ramas, actualizar commits y borrar el historial
    - `git rebase <rama>` → Aplica cualquier commit de la rama actual por delante de la especificada.
    - `git reset --hard <commit>` → Despeja el área de preparación, reescribe el árbol de trabajo desde el commit especificado.

## Versionado

### Buenas prácticas de versionado

Para poder llevar un control del versionado de manera prolija, se usara Git como herramienta. Así mismo, se hará uso de GitHub para tener acceso a un repositorio remoto, haciendo que todos los miembros del equipo, así como los profesores, tengan acceso para modificar y ver el progreso.

Los commits realizados llevarán un formato específico. Esto los hace más entendibles y mnemotécnicos. Las reglas a seguir serán las del “conventional commit”. En otras palabras, se implementaran commits con nombre de la forma <TIPO>: Descripción. El tipo podrá ser uno de dos: feat, para cuando se trate de una nueva funcionalidad; o fix, si es un commit que arregla un error o bug antes presente. Cabe destacar que no usamos todas las reglas propuestas de conventional commit y que usamos solo las que nos resultan más pertinentes.

También se seguirán ciertas reglas para las ramas, que serán explicadas a continuación.

### Uso de ramas separadas de 'main'

Para asegurar el correcto funcionamiento del producto, se trabajaran con múltiples ramas. Al implementar sobre nuestra versión estable nuevas funcionalidades, estas deberán pasar por un proceso de construcción, prueba y optimización, con el objetivo de llegar al mejor producto final posible. Debido a esto, se usan distintas ramas de desarrollo para poder llevar las distintas versiones de manera prolija y entendible. 

La rama principal es la “main”, en la que se llevaran todas las versiones estables. Al iniciar el desarrollo de una nueva función, se creará una nueva rama saliente de main, la rama “develop”, en la que iremos archivando las versiones de desarrollo. 

Esta rama dev podría generar otras ramas a la hora de implementar varias funcionalidades. Esto no tiene porqué suceder, pero podría darse el caso. Principalmente, podríamos ver dos tipos distintos de rama de dev: 1) La rama de feature, en la que se desarrolla una función específica del sistema. Una vez terminado el desarrollo de esta función, esta rama se integra a develop. 2) La rama release es aquella que sale de develop y se crea al acercarse a una versión estable. Se usa para corregir bugs y desarrollar la documentación. Una vez finalizado, se integra con la main.

Al llegar a una nueva versión estable en la rama develop, esta se integra con la main. De esta manera, se logra tener un espacio de trabajo en la rama develop, mientras que la última versión estable estará siempre al alcance, como el último commit de la rama main.

### Resumen de commits y evolución del proyecto

PONER FOTO DEL HISTORIAL DE COMMITS CUANDO TERMINEMOS

## Elicitación

### Evidencia de actividades de investigación

**Lluvia de ideas**

- Mostrar fecha y hora de los partidos (próximos y pasados)
- Noticias y predicciones (porcentajes de probabilidad de victoria de un equipo según lo que opinan los usuarios)
- Funciones de penca
- Grupos públicos y privados
- Elección de equipos favoritos
- Mostrar resultados y resúmenes en vivo
- Mostrar el porcentaje de usuarios que predijo cada resultado
- Apuestas
- Chat
- Anuncios
- Predicciones estilo SuperDT para puntos extra

**Ingeniería inversa**

Se tomaron apps de noticias de fútbol y pencas que pueden servir como inspiración para nuestro proyecto. Las apps en cuestión son OneFootball, Forza, PencaOvaciónMovistar y Penca del Mundial Claro.

OneFootball

Es una de las aplicaciones de fútbol más usadas ya que es de las más completas disponibles en el mercado. Permite seleccionar los equipos y ligas favoritos de cada usuario, brindando notificaciones más personalizadas, función que vemos muy beneficiosa. Brinda también la información pertinente de cada partido, como su fecha, horario, plantillas, resumen, resultado en vivo y estadísticas. Este último punto es fundamental y será muy usado en nuestro proyecto.

Forza Football

Otra app analizada es Forza Football, que tiene varias de las mismas funciones que OneFootball. Una función interesante es poder puntuar a los jugadores tras el partido, así como crear la que sería la formación ideal del usuario. Además se conecta directamente con casas de apuesta tales como Bet365, para realizar apuestas desde la app. Esta última función es interesante, pero no parece ser útil para nuestro proyecto.

PencaOvaciónMovistar

Es la principal aplicación de penca en la que nos basamos. El usuario puede formar parte de torneos con grupos públicos o privados, pudiendo importar los resultados de los partidos que ya predijo en otros grupos. A la hora de poner la predicción, se muestra el porcentaje de usuarios que predijo cada resultado, además de los datos generales del partido.

Penca del Mundial Claro

Esta aplicación de penca fue realizada por Guillermo Varela, licenciado en sistemas al que entrevistamos. Él nos facilitó mucha información de su proyecto, así como imágenes y prototipos que usaremos como guía. En general, las ideas que podríamos adaptar a nuestro sistema es implementar grupos públicos con influencers, ex-jugadores y periodistas reconocidos para viralizar la aplicación; intentar generar un sistema de puntos que incentive la participación, aunque se introduzca al juego de manera tardía; y poder crear grupos privados e invitar a gente a través de un código único.

**Entrevistas**

Se llevó a cabo una entrevista (que identificaremos como ENT01) con Guillermo Varela, consejero del Club Atlético Peñarol y licenciado en sistemas. La entrevista, que duró al rededor de una hora, fue de gran utilidad, ya que el entrevistado es un gran fanático, no solo del fútbol, sino que también de las pencas. Adicionalmente, como programador, tiene experiencia trabajando con aplicaciones de este estilo. La entrevista se preparó con una serie de preguntas a ser usadas como guía, haciendo preguntas adicionales que surgieron en el momento.

Lo que aprendimos de esta entrevista es que Guillermo participa en muchas pencas, y lo hace con compañeros de trabajo, medios, desconocidos, y con gente tanto uruguaya como extranjera. Disfruta la competencia de las pencas, y no le gusta lo poco competitivo que se puede volver entrar de manera tardía a una penca. No obstante, nunca participa en pencas por apostar, aunque si está dispuesto a pagar cierto monto para participar. En cuanto a los anuncios, el cree que anuncios creativos, relacionados a la aplicación, o pop ups cortos son aceptables.

Volviendo a la competitividad, él lo pone como algo fundamental del sistema. Una manera de conseguirla siempre puede ser hacer 2 tablas. Por un lado, establecer un dashboard tradicional, con los usuarios rankeados por los puntos que ganaron por sus predicciones. Por otro lado, se tiene otra tabla en la que se permite apostar los puntos que se tienen, dándole al juego más capas de competitividad. Sobre el tema de las tablas de ranking, él lo ve como un elemento fundamental de la penca, junto con la facilidad para proponer resultados.

Comentó que ve la penca como un juego de intuición y que no se debería poder cambiar el resultado una vez comienza el partido. Está de acuerdo con el resto de reglas clásicas. Asimismo, las predicciones del resto de jugadores debe mostrarse únicamente después de terminado el partido, pero si se pueden mostrar antes en forma de porcentajes y de manera anónima (ya que si se muestra quien lo realizo puede ser injusto). 

Para implementar un sistema nuevo, se nos ocurrió hacer una penca basada en el desempeño de los jugadores, al estilo ElSuperDT. Al presentarle esta idea, Guillermo dijo que le parece una buena idea si se usan fuentes objetivas, formales y empíricas para los puntajes. También propone hacer que los usuarios ganen más puntos si, por ejemplo, predicen que va a haber un gol desde afuera del área, o si adivinan quien mete gol. Lo importante, es que estos objetivos sean empíricos y comprobables para que sea justo.

En cuanto a otras funciones, mencionó que lo que él cree que le falta a Forza (app de fútbol que él usa primariamente) es incluir highlights de los partidos. Cree también que el chat es poco recomendable, ya que los usuarios usarán otras redes para comunicarse y la implementación puede ser complicada. Los datos brindados por la app en relación al partido deben ser principalmente los relacionados con la penca, no los datos que los usuarios podrían buscar en internet (obviamente los datos como la fecha, hora y estadio del partido deben estar, pero las plantillas, el arbitro, etc. simplemente cargaran la app).

La aplicación debe notificar antes de un partido a todos los miembros del grupo, para que nadie pierda puntos por olvidar votar. Además, se deben poder marcar partidos próximos como favoritos para que se guarden en aplicaciones como Google Calendar y que notifique al usuario cuando comience. La app también puede vincularse a otras redes sociales como Facebook, Twitter e Instagram para publicar los resultados y las posiciones y generar más interacción entre usuarios, así como publicidad.

Finalmente, en el aspecto estético, Guillermo recomendó un diseño minimalista con pocos elementos con página para que sea más entendible. Los botones deberán ser grandes para que sea más sencillo de usar. También recomendó usar imágenes genéricas que no sean propiedad de la FIFA, ya que puede haber complicaciones.

### Referencias a fuentes de información

### Caracterización de usuarios: User Personas

### Modelo conceptual del problema

## Especificación

### Definición de requerimientos funcionales y no funcionales

- RF1: Calendario de Partidos
    
    Actor: Usuario
    
    Descripción: Muestra fecha y hora de los partidos jugados y que se están por jugar, el resultado de los partidos jugados y el minuto a minuto de los partidos que se están jugando en el momento.
    
    Prioridad: Muy Alta
    
    Referencia: Lluvia de ideas
    
- RF2: Noticias
    
    Actor: Usuario
    
    Descripción: Está disponible una pestaña de noticias e información relevante con respecto a los próximos partidos.
    
    Prioridad: Media 
    
    Referencia: Lluvia de ideas
    

- RF3: Predicción de partidos
Actor: Usuario
Descripción: La posibilidad de competir por puntos prediciendo el resultado de los próximos partidos, tanto con conocidos (en grupos privados) como con desconocidos en (grupos públicos).
    
    Prioridad: Alta
    
    Referencia: Lluvia de ideas
    
- RF4: Predicciones
    
    Actor: Usuario
    
    Descripción: Una gráfica con el porcentaje de las opiniones generales de las personas (pertenecientes al grupo o no) con respecto al partido. Por ejemplo, equipo A gana, empate o pierde y el porcentaje de selección de cada opción.
    
    Prioridad: Media
    
    Referencia: Lluvia de ideas
    
- RF5: Apuestas de Puntos
    
    Actor: Usuario
    
    Descripción: Aparte de la penca tradicional, la posibilidad de apostar los puntos conseguidos. Esto hace que los usuarios que entren tarde tengan posibilidad de alcanzar a los usuarios con muchos puntos ya conseguidos. Aplican restricciones de apuesta para que nadie se vuelva inalcanzable.
    
    Prioridad: Media-Baja
    
    Referencia: ENT01
    

- RF6: Predicciones del Grupo
    
    Actor: Usuario
    
    Descripción: Permitir ver el porcentaje de predicciones del grupo perteneciente a la penca de forma anónima antes del partido, y los autores de las predicciones luego de haber cerrado la posibilidad de cambios.
    
    Prioridad: Media-Baja
    
    Referencia: ENT01 e Ingeniería de Requerimientos
    
- RF7: Predicciones de Situaciones Objetivas en los Partidos
    
    Actor: Usuario
    
    Descripción: La posibilidad de predecir situaciones especificas de los partidos para que haya posibilidad de ganar puntos extra. Por ejemplo, si el usuario ingresó 1-0 como predicción, la predicción extra sería si el gol es fuera o dentro del área. También podría ser cuantos tiros de esquina tuvo cada cuadro, que jugador metió cada gol, etc. 
    
    Prioridad: Media-Baja
    
    Referencia: ENT01 y lluvia de ideas
            
    

### User Stories / Use Cases detallados

### Bocetos de IU

## Validación y verificación

### Verificar la especificación

### Validar la solución con personas no involucradas en el proyecto

## Reflexión

### Detalle del trabajo individual

### Técnicas aplicadas y aprendizajes

## Referencias

CAPAZ QUE ESTA BUENO PONERLO DONDE REFERNCIAMOS A LOS ARTICULOS, NO TODOS AL FINAL.[Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[Buenas prácticas al trabajar con Git](https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/buenas-practicas-al-trabajar-con-git.html)