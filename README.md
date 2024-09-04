<h1 align="center">Bienvenidos a mi <a href="https://github.com/Aryagm">Biblioteca<a><img src="https://github.com/Kathryn-Jie/Kathryn-Jie/blob/main/wave.gif" width="60px"/></h1>
<h2>Como hacerlo funcionar?</h2>
<p>Primero debemos clonar el repositorio</p>
 <ul>
   <li><code>https://github.com/IvanDev03/prueba-tecnica-VML-Holding.git </code></li>
 </ul>
<h3>Base de Datos</h3>
 <p>Este proyecto esta hecho en una base de datos relacional especificamente en postgres
<h3>Back-end </h3>
<p>Abrimos nuestro IDE donde podamos usar PhP con Laravel y nos ubicamos en la carpeta <code>biblioteca-api</code></p>
<h4>Pasos a seguir</h4>
<h5>Configuración de la base de datos</h5>
 <ul>
  <li>Configurar variables de entorno para la base de datos</li>
   <li>ejecutar el contenedor de docker si no tienen pgadmin o otro gestor de bases de datos: <code>docker-compose up - d</code> </li>
   <li>Realizar las migraciones con el comando <code>php artisan migrate</code> </li>
   <li>Configurar Seeds <code>php artisan db:seed</code></li>
   <li>Correr el proyecto<code>php artisan serve</code></li>
 </ul>
<h3>Front-end </h3>  
<p>Abrimos Visual Studio Code, nos ubicamos en la carpeta <code>biblioteca-frontend</code></p>
<h4>Pasos a seguir</h4>
<ul>
  <li>Asegurarte que el Back-end este activo y funcionando </li>
  <li>Abrimos una nueva terminal</li>
  <li>Ejecutamos el siguiente código<code>npm install</code></li>
  <li>Ejecutamos despues <code>npm run dev</code></li>
</ul>
