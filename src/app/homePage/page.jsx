import s from "@/app/app.module.css"
import { useRouter } from "next/navigation"
import MainAppLayout from "@/widgets/layouts/layouts"
import Image from "next/image"
import img1 from "@/../public/images/home/img1.png"
import img2 from "@/../public/images/home/img2.svg"

const HomePage = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/movies")
    }

    return <MainAppLayout className={s.content}>
        <div className={s.homePage}>
            <Image className={s.homePageBackground} src={img1} alt="home-background" width={1250} height={800}/>
            <div className={s.titleBlock}>
                <Image src={img2} alt="title" width={576} height={228}/>
                <p className={s.text}>Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.</p>
                <div className={s.buttons}>
                    <button className={`${s.homePageButton} ${s.watch}`} onClick={clickHandler}>Смотреть</button>
                    <button className={`${s.homePageButton} ${s.about}`} onClick={clickHandler}>О фильме</button>
                </div>
            </div>
            <Novelties />
        </div>
    </MainAppLayout>
}

export default HomePage