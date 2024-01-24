"use client"
import { useRouter } from "next/navigation"


const MovieDetails = ({ params }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.back()
    }

    return <>
        <h1>Movie: { params.movieId }</h1>
        <button onClick={clickHandler}>Go back</button>
    </>

}

export default MovieDetails
