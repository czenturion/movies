"use client"
import { useRouter } from "next/navigation"
import s from "./app.module.css"

const Home = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <div className={s.main}>
        <div className={s.sidebar}>
            <img src="../../public/icons/search.svg" alt="search"/>
            <img src="../../public/icons/home.svg" alt="home"/>
        </div>
        <h1>Home Page</h1>
        <button onClick={clickHandler}>Go to movies</button>
    </div>
}

export default Home