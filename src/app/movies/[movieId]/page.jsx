"use client"
import { useRouter } from "next/navigation"

import s from "../movies.module.css"


const MovieDetails = ({ params }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.back()
    }

    return <>
        <h1 className={s.filmTitle}>Movie: { params.movieId }</h1>
        <button onClick={clickHandler}>Go back</button>
    </>
}

export default MovieDetails
