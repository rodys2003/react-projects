import "../components/MovieCard.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {

  const imageUrl = getMovieImg( movie.poster_path, 300);

  return (
    <li className="movieCard">
      <Link to={"movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="movieImage"
        />
      </Link>
        <div>{movie.title}</div>
    </li>
  );
}
