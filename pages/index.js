import moment from 'moment';
import LineGraph from '../components/charts/line/largeOverview/LineGraph'
import NationCasesWidget from '../components/datawidgets/NationCasesWidget';
import Layout from '../components/layout/Layout'
import getCovidData from '../components/utils/GetCovidData';

export async function getServerSideProps() {
  try {
    const
      date = moment().format('YYYY-MM-DD'),
      structure = {
        date: 'date',
        newCasesByPublishDate: 'newCasesByPublishDate',
        cumCasesByPublishDate: 'cumCasesByPublishDate',
      },
      
      //THIS IS BBBBBAAAAADDDD need to make a back end so that i can make one rest call with all data, cache it and then send back a correct object in one API call. 
      SCOTLAND_TODAY = await getCovidData('nation', 'scotland', date, structure),
      SCOTLAND_PREVIOUS = await getCovidData('nation', 'scotland', moment().subtract(1, 'days').format('YYYY-MM-DD'), structure),
      ENGLAND_TODAY = await getCovidData('nation', 'england', date, structure),
      ENGLAND_PREVIOUS = await getCovidData('nation', 'england', moment().subtract(1, 'days').format('YYYY-MM-DD'), structure),
      WALES_TODAY = await getCovidData('nation', 'wales', date, structure),
      WALES_PREVIOUS = await getCovidData('nation', 'wales', moment().subtract(1, 'days').format('YYYY-MM-DD'), structure),
      NORTHERN_IRELAND_TODAY = await getCovidData('nation', 'northern ireland', date, structure),
      NORTHERN_IRELAND_PREVIOUS = await getCovidData('nation', 'northern ireland', moment().subtract(1, 'days').format('YYYY-MM-DD'), structure),

      SCOTLAND = {today: SCOTLAND_TODAY, previous: SCOTLAND_PREVIOUS},
      ENGLAND = {today: ENGLAND_TODAY, previous: ENGLAND_PREVIOUS},
      WALES = {today: WALES_TODAY, previous: WALES_PREVIOUS},
      NORTHERN_IRELAND = {today: NORTHERN_IRELAND_TODAY, previous: NORTHERN_IRELAND_PREVIOUS}
      ;
      console.log(SCOTLAND_PREVIOUS)
    return {
      props: { SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND },
    };
  } catch (err) {
    console.error(err);
    return {
      //Todo: handle errors.  
      notFound: true
    };
  }
}


export default function Home({ SCOTLAND, ENGLAND, WALES, NORTHERN_IRELAND }) {
  return (
    <Layout>

      <div className='pt-6 px-4 ml-12 max-h-screen overflow-y-scroll'>
        <div className='w-full grid grid-cols-1'>
          <div className='bg-red-100 shadow rounded-lg py-5 px-6 text-base text-red-700' role='alert'>
            <p><b> WARNING: </b> Information on this website is not medical advice. Please speak to a medical professional if you have any concerns about your health. </p>
          </div>
        </div>

        <div className='mt-4 w-full max-h-2/4 min-h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

          <NationCasesWidget nation={'Scotland'} data={SCOTLAND} />

          <NationCasesWidget nation={'Wales'} data={WALES} />

          <NationCasesWidget nation={'England'} data={ENGLAND} />

          <NationCasesWidget nation={'Northern Ireland'} data={NORTHERN_IRELAND} />

        </div>

        <div className='w-full grid grid-cols-1 mt-4 mb-20'>
          <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
          //TODO: Line LineGraph
          </div>
        </div>

      </div>

    </Layout >
  )
}