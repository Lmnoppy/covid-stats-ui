import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/Layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='content-divs'>

        <div class="grid grid-rows-4 grid-flow-col gap-4">
          <div className="border border-amber-500">Welcome message about seeking actual medical advice and not, from you know a website thats made by a moron. </div>
          <div className="border border-amber-500">

            <div className=" border border-red-500 grid grid-cols-4 gap-4">
              <div className="border border-amber-500">Overview stats Scotland</div>
              <div className="border border-amber-500">Overview stats Wales</div>
              <div className="border border-amber-500">Overview stats Northen Ireland</div>
              <div className="border border-amber-500">Overview stats England</div>
            </div>

          </div>
          <div className="border border-amber-500 ">
            Line graph Overview of UK
          </div>
        </div>


      </div>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

