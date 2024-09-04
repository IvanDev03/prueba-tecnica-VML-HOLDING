import {  useState } from "react"
import * as consumerService from "../../services/common/consumerAuthService"
import { useNavigate } from 'react-router-dom';

const CompLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    

    const handleChange = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true);
        try {
            const login = await consumerService.login({ email, password })
            if (login) {
                localStorage.setItem('token', login)
                navigate('/Home')
            }
        } catch (error) {
            console.error('Login failed',error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4 ">
            <div className="max-w-sm w-full text-gray-600  ">
                <div className="text-center ">
                    <img src="/src/assets/react.svg" width={150} className="mx-auto animate-spin-slow" />
                    <div className="mt-5 space-y-2 ">
                        <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">Login to your account</h3>
                        <p className="text-gray-400">Don't have an account? <a href="/Sign-up" className="font-medium text-blue-400 hover:text-indigo-400">Sign up</a></p>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                    <form
                        onSubmit={handleChange}
                        className="space-y-5"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" disabled={loading}>
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default CompLogin