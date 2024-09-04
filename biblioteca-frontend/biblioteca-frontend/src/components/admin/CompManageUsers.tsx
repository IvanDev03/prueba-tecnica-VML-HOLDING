import { useEffect, useState } from "react";
import { getUsers } from "../../services/admin/consumerManageService";
import { IUserLoans } from "../../interfaces/consumerInterfaces";


const CompManageUsers = () => {

    const [user, setUser] = useState<IUserLoans[]>([])


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            if (Array.isArray(response)) {
                setUser(response);
            } else {
                console.error("Expected an array but got:", response);
                setUser([]);
            }
        };
        fetchUsers();
    }, [])


    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
                
                <div className="items-start justify-between md:flex pt-9">

                    <div className="max-w-lg pt-14">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            Usuarios más activos
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Estos son los usuarios más activos en la plataforma
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0 pt-20">
                        <a
                            href="/admin/add-user"
                            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-950 rounded-lg hover:bg-slate-700 active:bg-cyan-600 md:text-sm"
                        >
                            Add member
                        </a>
                    </div>
                </div>
                <div className="mt-12 shadow-xl border rounded-xl overflow-x-auto bg-white">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Username</th>
                                <th className="py-3 px-6 text-center ">Total Loans</th>
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                user.map((u) => (
                                    <tr key={u.id}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{u.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">{u.loans_count}</td>
                                        <td className="text-right px-6 whitespace-nowrap">
                                            <a href="/admin-edit-user" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Edit
                                            </a>
                                            <button type="submit" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}
export default CompManageUsers