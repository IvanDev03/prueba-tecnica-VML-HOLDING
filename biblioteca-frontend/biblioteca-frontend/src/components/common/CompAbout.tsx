
const CompAbout = () => {

    return (
        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

            <article className="bg-white max-w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm p-4">
                <div className="flex flex-col items-center pt-3">
                    <div className="w-32 h-32 rounded-full overflow-hidden hover:">
                        <img src="https://avatars.githubusercontent.com/u/164343836?s=400&u=5547e49b35f64c63e4e08826cbe22a419606e6fd&v=4" className="w-full h-full object-cover" alt="Mi Foto" />
                    </div>
                    <div className="mt-4 text-center pt-4">
                        <h3 className="text-xl text-gray-900">IvanDev03</h3>
                        <p className="text-gray-400 text-sm">Desarrollador Junior</p>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <a href="https://github.com/IvanDev03" target="_blank" rel="noopener noreferrer">
                            <img src="/src/assets/github-light.svg" className="w-8 h-8" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/ivan-felipe-torres-vela/" target="_blank" rel="noopener noreferrer">
                            <img src="/src/assets/linkedin.svg" className="w-8 h-8" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="pt-1 ml-4 mr-2 mb-3 w-80">
                        <h3 className="text-xl text-gray-900 pt-9">
                            Sobre mí
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                        Soy una persona apasionada por la tecnología, por el desarrollo Web, actualmente me dedico al backend ;).
                        Me encanta aprender cosas nuevas y siempre estoy dispuesto a enfrentar nuevos desafíos como este.
                        </p>
                    </div>
                    
                </div>
            </article>

            <article className="bg-white w-96 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm p-4">
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-2xl text-gray-900">
                        Biblioteca App
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        El Gestor de Biblioteca es una aplicación web diseñada para facilitar la administración de bibliotecas,
                        permitiendo a los usuarios gestionar su colección de libros de manera eficiente.
                        Esta aplicación está construida con React y sigue el paradigma CRUD
                        (Crear, Leer, Actualizar, Eliminar) para ofrecer una experiencia de usuario intuitiva y funcional.
                    </p>
                    <h3 className="text-xl text-gray-900 mt-4">Características principales:</h3>
                    <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-2">
                        <li>
                            <strong>Crear: </strong> Permite añadir nuevos libros a la biblioteca,
                            incluyendo detalles como título, autor, género, y año de publicación.
                        </li>
                        <li>
                            <strong>Leer: </strong> Ofrece una vista detallada de los libros almacenados en la biblioteca,
                            permitiendo a los usuarios buscar y filtrar por diferentes criterios.
                        </li>
                        <li>
                            <strong>Actualizar: </strong> Facilita la edición de la información de los libros existentes,
                            manteniendo los registros actualizados y precisos.
                        </li>
                        <li>
                            <strong>Eliminar: </strong> Proporciona la opción de eliminar libros que ya no son necesarios en la biblioteca.
                        </li>
                    </ul>
                    <br />
                    <p className="text-gray-400 text-sm">
                        Este gestor está diseñado para ser fácil de usar.
                        Además, se enfoca en una interfaz limpia y una navegación sencilla para mejorar la experiencia del usuario
                    </p>
                </div>
            </article>

            <article className="bg-white w-96 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm  ">
                <div className="pt-3 ml-4 mr-2 mb-3 w-full">
                    <h3 className="text-2xl text-gray-900 pt-3 text-center pr-4">
                        Stack Tecnológico🚀
                    </h3>
                    <ul className="text-gray-400 text-sm mt-1 grid grid-cols-3 gap-4 justify-items-center pr-9 pt-32">
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-react text-blue-500 text-3xl"></i>
                            <img src="/src/assets/react.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">React</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-node-js text-green-500 text-3xl"></i>
                            <img src="/src/assets/php.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">PHP</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-js-square text-yellow-500 text-3xl"></i>
                            <img src="/src/assets/typescript.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">TypeScript</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-html5 text-orange-500 text-3xl"></i>
                            <img src="/src/assets/html5.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">HTML5</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-css3-alt text-blue-500 text-3xl"></i>
                            <img src="/src/assets/tailwindcss.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">Tailwind CSS</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-php text-indigo-500 text-3xl"></i>
                            <img src="/src/assets/laravel.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">Laravel</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-laravel text-red-500 text-3xl"></i>
                            <img src="/src/assets/postgresql.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">Postgres</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fab fa-typo3 text-blue-500 text-3xl"></i>
                            <img src="/src/assets/vscode.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">VS code</span>
                        </li>
                        <li className="flex flex-col items-center mt-2">
                            <i className="fas fa-database text-blue-500 text-3xl"></i>
                            <img src="/src/assets/phpstorm.svg" className="w-8 h-8" alt="LinkedIn" />
                            <span className="mt-1">Php Storm</span>
                        </li>
                    </ul>
                </div>
            </article>

        </div>
    )
}

export default CompAbout
