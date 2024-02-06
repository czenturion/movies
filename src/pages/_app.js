import MainAppLayout from "@/widgets/layouts/layouts"
import Sidebar from "@/app/features/sidebar"

function MyApp({ Component, pageProps }) {
    return (
        <MainAppLayout className={s.main}>
            <Sidebar/>
            <Component {...pageProps} />
        </MainAppLayout>
    )
}

export default MyApp