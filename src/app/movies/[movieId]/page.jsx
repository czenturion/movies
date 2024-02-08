"use client"
import { useRouter } from "next/navigation"

import s from "../movies.module.css"
import MainAppLayout from "@/widgets/layouts/layouts"


const MovieDetails = ({ params }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.back()
    }

    return <MainAppLayout>
        <h1 className={s.filmTitle}>Movie: { params.movieId }</h1>
        <button onClick={clickHandler}>Go back</button>
    </MainAppLayout>
}

export default MovieDetails
