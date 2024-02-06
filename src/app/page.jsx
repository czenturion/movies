"use client"
import { useRouter } from "next/navigation"
import s from "@/app/app.module.css"
import MainAppLayout from "@/widgets/layouts/layouts"

const App = ({ pageProps }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <MainAppLayout className={s.main}>
        <div className={s.content}>
            <h1>Home Page</h1>
            <button onClick={clickHandler}>Go to movies</button>
        </div>
    </MainAppLayout>
}

export default App