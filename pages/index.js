import { useState } from 'react';
import LineGraph from '../components/charts/line/largeOverview/lineGraph'
import NationOverview from '../components/datawidgets/homescreenoverview/NationOverview';
import Layout from '../components/layout/Layout'
import { newDailyNsoDeathsByDeathDateScotland, newDailyNsoDeathsByDeathDateUK } from '../components/utils/Global';

export default function Home({ UKSTATS, SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND }) {

  const [getData, setData] = useState({ UKSTATS, SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND });

  return (
    <Layout>

      <div className="pt-6 px-4 ml-12 max-h-screen overflow-y-scroll">
        <div className="w-full grid grid-cols-1">
          <div className="bg-red-100 shadow rounded-lg py-5 px-6 text-base text-red-700" role="alert">
            <p><b> WARNING: </b> Information on this website is intended as a proof of concept, it is not medical advice. Please speak to a medical professional if you have any concerns about your health. </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 mt-4">
          <div className="bg-blue-100 shadow rounded-lg py-5 px-6 text-base text-blue-700" role="alert">
            <p><b> Information: </b> Death data on this site is roughly 11 days late, this is to allow registrations of deaths with the office of national statistics </p>
          </div>
        </div>

        <div className="mt-4 w-full max-h-2/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          {typeof getData != 'undefined' && typeof getData != 'undefined' && getData.SCOTLAND != null
            ? <NationOverview nation={"Scotland"} data={getData.SCOTLAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData != 'undefined' && getData.WALES != null
            ? <NationOverview nation={"Wales"} data={getData.WALES} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData != 'undefined' && getData.ENGLAND != null
            ? <NationOverview nation={"England"} data={getData.ENGLAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData != 'undefined' && getData.NORTHERN_IRELAND != null
            ? <NationOverview nation={"Northern Ireland"} data={getData.NORTHERN_IRELAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

        </div>

        <div className="w-full grid grid-cols-1 mt-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              {typeof getData != 'undefined'
                ?
                <LineGraph data={getData} tooltipText={'ONS Death stats'} />
                :
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                    <span className='visually-hidden'></span>
                  </div>

                  <span className='block'>Loading...</span>
                </div>
              }
          </div>
        </div>

      </div>

    </Layout >
  )
}

export async function getStaticProps(context) {
  try {
    const a = 2;
    if (a === 1) {
      const UKSTATS = await getOverview();
      const SCOTLAND = await getNationResults("scotland")
      const ENGLAND = await getNationResults("england")
      const WALES = await getNationResults("wales")
      const NORTHERN_IRELAND = await getNationResults("northern%20ireland");
    }
    const UKSTATS = newDailyNsoDeathsByDeathDateUK;
    const SCOTLAND = newDailyNsoDeathsByDeathDateScotland;
    const ENGLAND = newDailyNsoDeathsByDeathDateUK;
    const WALES = newDailyNsoDeathsByDeathDateUK;
    const NORTHERN_IRELAND = newDailyNsoDeathsByDeathDateUK;

    return {
      props: { UKSTATS, SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND },
    };

  } catch (err) {
    console.error(err);
    return {
      notFound: true
    };
  }
}

async function getNationResults(areaName) {
  const res = await fetch(`https://coronavirus.data.gov.uk/api/v2/data?areaType=nation&areaName=` + areaName + `&release=2022-02-18&metric=newDailyNsoDeathsByDeathDate&format=json`);
  const { body } = await res.json()
  const results = body
  return results;
}

async function getOverview() {
  const res = await fetch(`https://coronavirus.data.gov.uk/api/v2/data?areaType=overview&release=2022-02-18&metric=newDailyNsoDeathsByDeathDate&format=json`);
  const { body } = await res.json()
  const results = body
  return results;
};