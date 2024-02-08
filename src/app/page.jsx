"use client"
import { useRouter } from "next/navigation"
import HomePage from "@/app/homePage/page"

const App = ({ pageProps }) => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <HomePage />
}

export default App