"use client"
import { useRouter } from "next/navigation"
import s from "./app.module.css"
import Layout from "@/widgets/layouts/layouts";

const App = ({ Component, pageProps }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <Layout className={s.main}>
        <div className={s.content}>
            <h1>Home Page</h1>
            <button onClick={clickHandler}>Go to movies</button>
            <Component {...pageProps} />
        </div>
    </Layout>
}

export default App