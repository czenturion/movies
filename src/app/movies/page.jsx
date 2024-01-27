"use client"
import {useRouter} from "next/navigation"
import s from "./movies.module.css"

const Movies = () => {
    const router = useRouter()
    const filmsList = [1, 2, 3, 4]

    const clickHandler = (id) => {
        router.push(`/movies/${id}`)
    }

    return <>
        <h1>Movies page</h1>
        <div className={s.filmsList}>
            {filmsList.map(id => <span
                className={s.link} onClick={() =>
                clickHandler(id)}>Movie id: {id}</span>)}
        </div>
        <button onClick={() => router.push("/")}>Go home</button>
    </>
}

export default Movies