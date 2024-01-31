"use client"
import { useRouter } from "next/navigation"
import s from "./app.module.css"
import Image from "next/image"
import search from "../../public/icons/search.svg"
import home from "../../public/icons/home.svg"
import watch from "../../public/icons/watch.svg"
import charts from "../../public/icons/charts.svg"
import favorite from "../../public/icons/favorite.svg"
import profile from "../../public/icons/profile.svg"
import scrollUp from "../../public/icons/scrollUp.svg"

const Home = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <div className={s.main}>
        <div className={s.sidebar}>
            <Image src={search} alt="search" width={44} height={44}/>
            <Image src={home} alt="search" width={44} height={44}/>
            <Image src={watch} alt="search" width={44} height={44}/>
            <Image src={charts} alt="search" width={44} height={44}/>
            <Image src={favorite} alt="search" width={44} height={44}/>
            <Image src={profile} alt="search" width={44} height={44}/>
            <Image src={scrollUp} alt="search" width={44} height={44}/>
        </div>
        <div className={s.content}>
            <h1>Home Page</h1>
            <button onClick={clickHandler}>Go to movies</button>
        </div>
    </div>
}

export default Home