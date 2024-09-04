import { useEffect, useState } from 'react';
import { IBook } from '../../interfaces/consumerInterfaces';
import { deleteBook, fetchBooks } from '../../services/book/consumerBookService';
import { Link } from 'react-router-dom';

const CompGetBooks = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const getBooks = async () => {
        const response = await fetchBooks(page);
        if (Array.isArray(response.books)) {
            setBooks(response.books);
            setTotalPages(response.totalPages);
        } else {
            console.error("Expected an array but got:", response);
            setBooks([]);
        }
    };
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handleDelete = async (id: string | undefined) => {
        if (id) {
            const response = await deleteBook(id);
            if (response) {
                console.log('Book deleted');
            }
            getBooks();
        }
    }
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
                <div className="items-start justify-between md:flex pt-9">
                    <div className="max-w-lg pt-14">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            Todos los libros
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Estos son todos los libros que tenemos en nuestra biblioteca.
                        </p>
                    </div>
                </div>
                <div className="mt-12 shadow-xl border rounded-xl overflow-x-auto bg-white">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Book Id</th>
                                <th className="py-3 px-6">Title</th>
                                <th className="py-3 px-6 text-center">Author</th>
                                <th className="py-3 px-6 text-center">Categorie id</th>
                                <th className="py-3 px-6 text-center">Stock</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {books.map((u) => (
                                <tr key={u.id}>
                                    <td className="py-3 px-6 text-center">{u.id}</td>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{u.title}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">{u.author}</td>
                                    <td className="py-3 px-6 text-center">{u.categorie_id}</td>
                                    <td className="py-3 px-6 text-center">{u.stock}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <Link to={`/admin-edit-book/${u.id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(u.id?.toFixed())} type="submit" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                        className="px-4 py-2 dark:bg-gray-900  text-white rounded disabled:opacity-50"
                    >
                        Anterior
                    </button>
                    <span className="text-gray-700">
                        Página {page} de {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="px-4 py-2 dark:bg-gray-900  text-white rounded disabled:opacity-50"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    );
};

export default CompGetBooks;