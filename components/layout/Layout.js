import Head from 'next/head'
import SideBar from './nav/sidebar/SideBar'
import TopBar from './nav/topbar/topBar'

export const siteTitle = "Covid UI"

export default function Layout({ children }) {

    return (
        <div className="content-container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Covid stats website"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <title>{siteTitle}</title>
            </Head>
            <div>
                <SideBar />
            </div>            
            <div >
                <TopBar siteTitle={siteTitle} />
            </div>
            <main >
                {children}
            </main>

        </div>
    )
}
