import DefaultLayout from "../layouts/DefaultLayout";

function HomeMovies() {
    return (

        <div className="card">
            <img
                src={`/img/${movie.image}`}
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
                    Dettagli
                </button>
            </div>
        </div>

    )
}

export default HomeMovies;
