"use client"
import {useRouter} from "next/navigation";
import s from "./movies.module.css";

const Movies = () => {
    const router = useRouter()
    const filmsList = [1, 2, 3, 4]

    return <>
        <h1>Movies page</h1>
        <div style={{display: "flex", flexDirection: "column"}}>
        {filmsList.map(id => <span className={s.link} style={{marginTop: '15px'}} onClick={() => router.push(`/movies/${id}`)}>Movie id: {id}</span>)}
        </div>
        <button style={{marginTop: '15px'}} onClick={() => router.push("/")}>Go home</button>
    </>
}

export default Movies