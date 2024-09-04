
const Home = () => {
    
    const posts = [
        {
            title: "Cien años de soledad",
            desc: "Cien años de soledad trata un siglo en la vida de la familia Buendía, cuyo patriarca, José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia. La novela es considerada una obra maestra de la literatura latinoamericana y uno de los ejemplos clásicos del realismo mágico.",
            img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/04/10/5fa524ec6ff09.jpeg",
            authorLogo: "https://www.las2orillas.co/wp-content/uploads/2020/04/gabo-redes.jpg",
            authorName: "Gabirel García Márquez",
            date: "Mayo 6 1967",
            href: "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad"
        },
        {
            title: "La Amiga Estupenda",
            desc: "Con este título se inaugura una trilogía deslumbrante que tiene como telón de fondo la ciudad de Nápoles a mediados del siglo pasado y como protagonistas a Nanú y Lila",
            img: "https://www.mrwonderbook.com/wp-content/uploads/2020/02/041-La-amiga-estupenda-resena.jpg",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Ferrante Elena",
            date: "Nov 7 2011",
            href: "https://es.wikipedia.org/wiki/La_amiga_estupenda_(novela)"
        },
        {
            title: "1984",
            desc: "Londres, 1984: el Gran Hermano controla hasta el último detalle de la vida privada de los ciudadanos. Winston Smith trabaja en el Ministerio de la Verdad reescribiendo y retocando la historia para un estado totalitario que somete de forma despiadad.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j9kgE78IU6oo-AlNC5wv-8KD2_fmI0Rw_g&s",
            authorName: "Orwell George",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            date: "Jun 8 1949",
            href: "https://es.wikipedia.org/wiki/1984_(novela)"
        },
        {
            title: "En La Corte Del Lobo",
            desc: "Inglaterra, en 1520, está a un paso del desastre. El rey Enrique VIII no consigue engendrar un heredero varón y quiere divorciarse de su mujer, Catalina de Aragón, para casarse con Ana Bolena",
            img: "https://www.planetadelibros.com.co/usuaris/libros/fotos/51/m_libros/50217_portada_en-la-corte-del-lobo_hilary-mantel_202007071615.jpg",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Harris Hilary",
            date: "Feb 4 2015",
            href: "https://es.wikipedia.org/wiki/En_la_corte_del_lobo"
        },
        {
            title: "Zorba El Griego: Vida Y Andanzas De Alexis Zorba",
            desc: "Nikos Kazantzakis (Heraclión, 1883 - Friburgo de Brisgovia, 1957) fue autor de una extensa obra, entre la que se cuentan novelas, libros de viajes, poemas y ensayos.",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446190385i/27392408.jpg",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Kazantzakis Nikos",
            date: "Mar 4 2015",
            href: "https://es.wikipedia.org/wiki/Zorba,_el_griego"
        },
        {
            title: "Las Correcciones",
            desc: " Esta obra?editada por primera vez en castellano en 2002? marcó un punto de inflexión en la trayectoria de su autor y lo consagró como uno de los más destacados escritores norteamericanos contemporáneos",
            img: "https://http2.mlstatic.com/D_NQ_NP_680047-MCO72026285614_102023-O.webp",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Franzen Jonathan",
            date: "Abr 4 2002",
            href: "https://es.wikipedia.org/wiki/Las_correcciones"
        }
    ]
    return (
        <>
      
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Libros
                </h1>
                <p className="mt-3 text-gray-500">
                    Los libros más populares de la historia.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="bg-white max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
            
        </>
    )
}
export default Home