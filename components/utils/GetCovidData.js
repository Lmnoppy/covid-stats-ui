function buildURL(areatype, areaName, date, structure) {
    const filters = [
      `areaType=${areatype}`,
      `areaName=${areaName}`,
      `date=${date}`
    ]
    const apiParams = `filters=${filters.join(';')}&structure=${JSON.stringify(structure)}`,
      encodedParams = encodeURI(apiParams),
      url = 'https://api.coronavirus.data.gov.uk/v1/data?' + encodedParams;
    //console.log(`complete URL is: ${url}`)
    return url
  }

export default async function getCovidData(areaType, areaName, date, structure) {
    const res = await fetch(buildURL(areaType, areaName, date, structure));
    const { data } = await res.json()
    const results = data
    return results;
  }