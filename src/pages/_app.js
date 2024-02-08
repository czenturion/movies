import MainAppLayout from "@/widgets/layouts/layouts"

function MyApp({ Component, pageProps }) {
    return (
        <MainAppLayout className={s.main}>
            <Component {...pageProps} />
        </MainAppLayout>
    )
}

export default MyApp