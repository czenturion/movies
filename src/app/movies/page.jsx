"use client"
import {useRouter} from "next/navigation"
import s from "@/app/movies/movies.module.css"
import MainAppLayout from "@/widgets/layouts/layouts"

const Movies = () => {
    const router = useRouter()
    const filmsList = [1, 2, 3, 4]

    const clickHandler = (id) => {
        router.push(`/movies/${id}`)
    }

    return <MainAppLayout>
        <h1 className={s.movies}>Movies page</h1>
        <div className={s.filmsList}>
            {filmsList.map(id => <span
                className={s.link}
                onClick={() => clickHandler(id)}>Movie id: {id}</span>)}
        </div>
        <button onClick={() => router.push("/")}>Go home</button>
    </MainAppLayout>
}

export default Movies