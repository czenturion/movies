import Sidebar from "@/app/features/sidebar"
import s from "@/app/app.module.css"

const MainAppLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main className={s.main}>
                { children }
            </main>
        </>
    )
}

export default MainAppLayout