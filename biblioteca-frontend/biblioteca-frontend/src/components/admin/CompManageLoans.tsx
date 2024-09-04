import { useEffect, useState } from "react"
import { getLoans } from "../../services/admin/consumerManageService"
import { ICompManageLoansProps } from "../../interfaces/consumerInterfaces"
import CompNavbar from "../common/CompNavBar"

const CompManageLoans = () => {
    
    const [loans, setLoans] = useState<ICompManageLoansProps[]>([])

    useEffect(() => {
        const fetchLoans = async () => {
            const response = await getLoans();
            if (Array.isArray(response)) {
                setLoans(response);
            } else {
                console.error("Expected an array but got:", response);
                setLoans([]);
            }
        };
        fetchLoans();
    });
    

    return (
        <>
            <CompNavbar />
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-24">
                <div className="items-start justify-between md:flex">
                    <div className="max-w-lg">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl text-center">
                            Todos los Prestamos
                        </h3>
                        <p className="text-gray-600 mt-2">

                        </p>
                    </div>
                   
                </div>
                <div className="mt-12 relative h-max overflow-auto shadow-xl border rounded-lg bg-white">
                    <table className="w-full table-auto text-sm text-left ">
                        <thead className="text-gray-600 font-medium bg-neutral-300">
                            <tr>
                                <th className="py-3 pr-6 text-center">Loan Id</th>
                                <th className="py-3 pr-6 text-center">User Id</th>
                                <th className="py-3 pr-6 text-center">Book Id</th>
                                <th className="py-3 pr-6 text-center">Status</th>
                                <th className="py-3 pr-6">Loan Date</th>
                                <th className="py-3 pr-6">Return Date</th>
                           
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                loans.map((item, idx: number) => (
                                    <tr key={idx}>
                                        <td className="pr-6 py-4 whitespace-nowrap text-center">{item.id}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-center">{item.user_id}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-center">{item.book_id}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap text-center">
                                            <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "returned" ? "text-green-600 bg-green-50" : "text-red-500 bg-red-50"}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.loan_date.toString()}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.return_date.toString()}</td>
                                      
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

export default CompManageLoans