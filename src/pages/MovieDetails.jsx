import DefaultLayout from "../layouts/DefaultLayout";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import RevForm from "../components/RevForm";

function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const url = `http://localhost:3000/movies/${id}`;



    function fetchMovies(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error))
    }

    function fetchReviews(id) {

        fetch(`http://localhost:3000/reviews/movies/${id}`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetchMovies(url), fetchReviews(id);
    }, [id])

    return (

        < section className="single-movies bg-light py-5" >
            <h1>Dettaglio film {id}</h1>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img
                            src={`http://localhost:3000/img/${movie?.image}`}
                            alt={movie?.title || ""}
                            className="img-fluid rounded-3"
                        />
                    </div>


                    <div className="col-12 col-md-8">
                        <h1>{movie ? movie.title : "Movie Title"}</h1>
                        <div className='text-sm'>Director: {movie ? movie.director : "John Doe"}</div>
                        <div className='text-sm'>Year: {movie && movie.release_year}</div>
                        <div className="pt-3"><strong>Abstract</strong>: {movie ? movie.abstract : "This is a brief description of the movie."}</div>
                    </div>
                    <div className="container">
                        <h3><strong>Reviews:</strong></h3>
                        {reviews.map((review) => (

                            <div className="col-12 col-md-8" key={review.id}>
                                <div className="text-sm"><strong>{review.name}</strong></div>
                                <div className="text-sm">{review.text}</div>
                            </div>

                        ))}
                    </div>

                </div>
                <RevForm
                    url="http://localhost:3000"
                    movieId={id}
                />
            </div>
        </ section>

    )
}

export default MovieDetails;