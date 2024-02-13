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
            <Image className={s.homePageBackground} src={img1} alt="home-background" maxWidth={1250} maxHeight={800} width="100%"/>
            <div className={s.titleBlock}>
                <Image src={img2} alt="title" width={576} height={228}/>
                <p className={s.text}>Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.</p>
                <div className={s.buttons}>
                    <button className={s.homePageButton} onClick={clickHandler}>Смотреть</button>
                    <button className={s.homePageButton} onClick={clickHandler}>О фильме</button>
                </div>
            </div>
        </div>
    </MainAppLayout>
}

export default HomePage