import LineGraph from '../components/charts/line/largeOverview/lineGraph'
import Layout from '../components/layout/Layout'
import { fakeData } from '../components/utils/Global';

export default function Home({ allPostsData, result }) {
  return (
    <Layout>
      <div className='content-divs overscroll-contain'>

        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="border border-amber-500">Welcome message about seeking actual medical advice and not, from you know a website thats made by a moron. </div>
          <div className="border border-amber-500">high level stats for UK </div>
          <div className="border border-amber-500">

            <div className=" border border-red-500 grid grid-cols-4 gap-4">
              <div className="border border-amber-500">Overview stats Scotland</div>
              <div className="border border-amber-500">Overview stats Wales</div>
              <div className="border border-amber-500">Overview stats Northen Ireland</div>
              <div className="border border-amber-500">Overview stats England</div>
            </div>

          </div>
          <div className="border border-amber-500 ">
            <LineGraph data={result} tooltipText={"ONS Death stats"}/>
          </div>
        </div>


      </div>

    </Layout>
  )
}

export async function getStaticProps(context) {
    try {
        //const res = await fetch(`https://coronavirus.data.gov.uk/api/v2/data?areaType=overview&release=2022-02-17&metric=cumDailyNsoDeathsByDeathDate&format=json`
        //);
        //const { body } = await res.json()
        const result = fakeData;
        return {
            props: { result },
        };
    } catch (err) {
        console.error(err);
    }
}

