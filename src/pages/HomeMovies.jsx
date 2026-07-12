import DefaultLayout from "../layouts/DefaultLayout";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


function HomeMovies() {


    const [movies, setMovies] = useState([]);

    //dove devo fetchare
    const url = 'http://localhost:3000/movies';

    function fetchMovies(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchMovies(url)
    }, [])




    return (
        <section className="movie-list py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {movies.map((movie) => (
                        <div className="col" key={movie.id}>
                            <div className="card h-100">
                                <img
                                    src={`http://localhost:3000/img/${movie.image}`}
                                    alt={movie.title}
                                    className="card-img-top"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {movie.title}
                                    </h5>

                                    <p className="card-text">
                                        {movie.year}
                                    </p>

                                    <button className="btn btn-primary">
                                        {movie.abstract}
                                    </button>
                                    <Link to={`/movie/${movie.id}`} className="btn btn-dark align-center m-1">
                                        Dettaglio
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>



    )
}

export default HomeMovies;
