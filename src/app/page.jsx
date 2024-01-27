"use client"
import {useRouter} from "next/navigation"

const Home = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <div>
        <h1>Home Page</h1>
        <button onClick={clickHandler}>Go to movies</button>
    </div>
}

export default Home