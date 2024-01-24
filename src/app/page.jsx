"use client"
import {useRouter} from "next/navigation";

const Home = () => {
    const router = useRouter()

    return <div>
        <h1>Home Page</h1>
        <button onClick={() => router.push("/movies")}>Go to movies</button>
    </div>
}

export default Home