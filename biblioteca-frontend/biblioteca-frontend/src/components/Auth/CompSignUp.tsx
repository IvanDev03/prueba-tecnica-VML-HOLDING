import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as consumerService from "../../services/common/consumerAuthService";

const CompSingUp = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate();

    const handleChange = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const register = await consumerService.register({ name, email, password })
        if (register) {
            localStorage.setItem('token', register)
            navigate('/Login')
        }else{
            console.log('Error al registrar)')
        }
    }


    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    <img src="/src/assets/react.svg" width={150}  />
                    <div className=" mt-16 space-y-3">
                        <h3 className="text-white text-3xl font-bold">Registrate ahora </h3>
                        <p className="text-gray-300">
                            Create una cuenta y accede a todos nuestros servicios.
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-400 font-medium translate-x-5">
                                5.000+ usuarios registrados
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-max"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                        filter: "blur(118px)",
                        zIndex: -1
                    }}
                >
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
                    <div className="">
                        <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" />
                        <div className="mt-5 space-y-2 bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl text-center ">Sign up</h3>
                            <p className="text-center">Already have an account? <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500 t">Log in</a></p>
                        </div>
                    </div>

                    <div className="relative">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue Register</p>
                    </div>
                    <form

                        onSubmit={handleChange}
                        className="space-y-5 bg-white p-8 rounded-lg shadow-lg"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-slate-900 hover:bg-slate-700 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default CompSingUp