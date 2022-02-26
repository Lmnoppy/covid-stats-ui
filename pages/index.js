import { useState } from 'react';
import LineGraph from '../components/charts/line/largeOverview/lineGraph'
import NationOverview from '../components/datawidgets/homescreenoverview/NationOverview';
import Layout from '../components/layout/Layout'

export default function Home({ UKSTATS, SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND }) {

  const [getData, setData] = useState({ UKSTATS, SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND });

  return (
    <Layout>

      <div className='pt-6 px-4 ml-12 max-h-screen overflow-y-scroll'>
        <div className='w-full grid grid-cols-1'>
          <div className='bg-red-100 shadow rounded-lg py-5 px-6 text-base text-red-700' role='alert'>
            <p><b> WARNING: </b> Information on this website is not medical advice. Please speak to a medical professional if you have any concerns about your health. </p>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 mt-4'>
          <div className='bg-blue-100 shadow rounded-lg py-5 px-6 text-base text-blue-700' role='alert'>
            <p><b> Information: </b> Death data on this site is roughly 11 days late, this is to allow registrations of deaths with the office of national statistics </p>
          </div>
        </div>

        <div className='mt-4 w-full max-h-2/4 min-h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

          {typeof getData != 'undefined' && typeof getData.SCOTLAND != 'undefined' && getData.SCOTLAND != null
            ? <NationOverview nation={'Scotland'} data={getData.SCOTLAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData.WALES != 'undefined' && getData.WALES != null
            ? <NationOverview nation={'Wales'} data={getData.WALES} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData.ENGLAND != 'undefined' && getData.ENGLAND != null
            ? <NationOverview nation={'England'} data={getData.ENGLAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

          {typeof getData != 'undefined' && typeof getData.NORTHERN_IRELAND != 'undefined' && getData.NORTHERN_IRELAND != null
            ? <NationOverview nation={'Northern Ireland'} data={getData.NORTHERN_IRELAND} />
            : <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                <span className='visually-hidden'></span>
              </div>

              <span className='block'>Loading...</span>
            </div>
          }

        </div>

        <div className='w-full grid grid-cols-1 mt-4 mb-20'>
          <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
            {typeof getData != 'undefined' && typeof getData.UKSTATS != 'undefined'
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

export async function getServerSideProps(context) {
  try {
    const 
    UKSTATS = await getCovidData('overview', 'overview'),
    SCOTLAND = await getCovidData('nation', 'scotland'),
    ENGLAND = await getCovidData('nation', 'england'),
    WALES = await getCovidData('nation', 'wales'),
    NORTHERN_IRELAND = await getCovidData('nation', 'northern ireland');
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

function buildURL(areaType, areaName) {
  let filters
  const structure = {
    'date': 'date',
    'newCasesByPublishDate': 'newCasesByPublishDate',
    'newDailyNsoDeathsByDeathDate': 'newDailyNsoDeathsByDeathDate',
    'cumCasesByPublishDate': 'cumCasesByPublishDate',
    'cumDailyNsoDeathsByDeathDate': 'cumDailyNsoDeathsByDeathDate',
    'cumPeopleVaccinatedFirstDoseByPublishDate': 'cumPeopleVaccinatedFirstDoseByPublishDate',
    'cumPeopleVaccinatedSecondDoseByPublishDate': 'cumPeopleVaccinatedSecondDoseByPublishDate'
  };

  if (areaType === 'overview') {
    filters = [
      `areaType=${areaType}`,
    ]
  }

  if (areaType === 'nation') {
    filters = [
      `areaType=${areaType}`,
      `areaName=${areaName}`
    ]
  }

  const apiParams = `filters=${filters.join(';')}&structure=${JSON.stringify(structure)}`, 
  encodedParams = encodeURI(apiParams),
  url = 'https://api.coronavirus.data.gov.uk/v1/data?' + encodedParams;
  console.log(`complete URL is: ${url}`)
  return url
}

async function getCovidData(areaType, areaName) {
  const res = await fetch(buildURL(areaType, areaName));
  const { data } = await res.json()
  const results = data
  return results;
}