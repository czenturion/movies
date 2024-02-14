import s from "@/app/app.module.css"
import Image from "next/image"
import search from "@/../public/icons/search.svg"
import home from "@/../public/icons/home.svg"
import watch from "@/../public/icons/watch.svg"
import charts from "@/../public/icons/charts.svg"
import favorite from "@/../public/icons/favorite.svg"
import profile from "@/../public/icons/profile.svg"
import scrollUp from "@/../public/icons/scrollUp.svg"

const Sidebar = () => {
    return <div className={s.sidebar}>
        <Image className={s.button} src={search} alt="search" width={44} height={44}/>
        <Image className={s.button} src={home} alt="search" width={44} height={44}/>
        <Image className={s.button} src={watch} alt="search" width={44} height={44}/>
        <Image className={s.button} src={charts} alt="search" width={44} height={44}/>
        <Image className={s.button} src={favorite} alt="search" width={44} height={44}/>
        <Image className={s.button} src={profile} alt="search" width={44} height={44}/>
        <Image className={s.button} src={scrollUp} alt="search" width={44} height={44}/>
    </div>
}

export default Sidebar