import { useEffect, useState } from 'react'

const CompNavbar = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <nav className={`dark:bg-gray-900 w-full fixed top-0 left-0 z-50 ${state ? "shadow-lg rounded-sm border mx-2 mt-2 md:shadow-lg md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4 md:px-8">
                <div className="text-white text-lg pr-4">Biblioteca App</div>
                <div className="md:hidden">
                    <button className="menu-btn text-gray-500 hover:text-gray-800"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>


                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-8 md:space-y-0">
                        <li className="text-gray-200 hover:text-cyan-700 pl-5">
                            <a href="/Libros" className="block">
                                Libros
                            </a>
                        </li>
                        <li className="text-gray-200 hover:text-cyan-700">
                            <a href="/admin/manage-users" className="block">
                                Usuarios más activos
                            </a>
                        </li>
                        <li className="text-gray-200 hover:text-cyan-700">
                            <a href="/admin/manage-loans" className="block">
                                Préstamos
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-8 md:space-y-0">
                        <li className="text-gray-200 hover:text-cyan-700 pl-5">
                            <a href="/About" className="block">
                                Sobre este proyecto
                            </a>
                        </li>
                    </ul>
                    <div className="flex-1 flex items-center justify-end mt-6 space-y-6 md:space-y-0 md:mt-0 md:ml-8">
                        <a href="/Login" className="block text-gray-300 hover:text-cyan-700">
                            Log in
                        </a>
                        <a href="/Sign-up" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex ml-4">
                            Sign in
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default CompNavbar