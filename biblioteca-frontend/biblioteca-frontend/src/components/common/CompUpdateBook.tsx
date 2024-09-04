import { useState, useEffect } from 'react';
import { getBookbyId, updateBook } from '../../services/book/consumerBookService';
import { useParams, useNavigate } from 'react-router-dom';



const CompUpdateBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [categorie_id, setCategorie_id] = useState(0)
    const [stock, setStock] = useState(0)

    const navigate = useNavigate();
    const { id } = useParams();

    const editBook = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await updateBook({ title, author, categorie_id, stock }, id);
            console.log('API response:', response);
            if (response) {
                console.log('Book updated');
            }
            navigate("/Libros");
        } catch (error) {
            console.error('Error updating book', error)
        }
    }
    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await getBookbyId(id as string);
                console.log('API response:', response); // Log the response object
                if (response) {     
                    console.log('Book data:', response); // Log the data object
                    setTitle(response.title);
                    setAuthor(response.author);
                    setCategorie_id(response.categorie_id);
                    setStock(response.stock);
                } else {
                    console.error('Failed to fetch book data');
                }
            } catch (error) {
                console.error('Error fetching book', error);
            }
        };
        getBook();
    }, [id]);

    return (
        <>
            <form
                onSubmit={editBook}
                className="space-y-5 bg-white p-8 rounded-lg shadow-lg"
            >
                <div>
                    <label className="font-medium">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Author
                    </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Categoria Id
                    </label>
                    <input
                        type="text"
                        value={categorie_id}
                        onChange={(e) => setCategorie_id(+e.target.value)}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Stock
                    </label>
                    <input
                        type="text"
                        value={stock}
                        onChange={(e) => setStock(+e.target.value)}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium bg-slate-900 hover:bg-slate-700 active:bg-indigo-600 rounded-lg duration-150"
                >
                    Update book
                </button>
            </form>

        </>
    )

}
export default CompUpdateBook;