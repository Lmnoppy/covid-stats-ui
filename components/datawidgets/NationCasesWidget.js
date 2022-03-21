import { useEffect, useState } from "react";
import Divider from "../Divider";
import { percentageChange, hasValue } from "../utils/NumberUtils";

export default function NationCasesWidget({ nation, data }) {

    const [getData, setData] = useState(data);

    useEffect(() => {
        setData(data)
    }, [data])

    return (
        <div className="bg-white shadow-md max-h-96 rounded-lg p-4 sm:p-6 xl:p-8 overflow-y-scroll ">

            <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-900">{nation}</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-gray-500 text-sm">
                    Date: {getData.today[0].date}
                </div>
            </div>
            <Divider />
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(getData.today[0].newCasesByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">New cases</h3>
                </div>

                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        getData.previous[0].newCasesByPublishDate === 0 ?
                            <span className="text-gray-500">No change</span>
                            :
                            getData.today[0].newCasesByPublishDate === 0 ?
                                <span className="">No data</span>
                                :
                                getData.previous[0].newCasesByPublishDate === getData.today[0].newCasesByPublishDate ?
                                    <span className="">No change</span> :
                                    percentageChange(getData.today[0].newCasesByPublishDate, getData.previous[0].newCasesByPublishDate) < 0 ?
                                        <span className="text-green-600">{percentageChange(getData.today[0].newCasesByPublishDate, getData.previous[0].newCasesByPublishDate)}</span>
                                        :
                                        <span className="text-red-600">{percentageChange(getData.today[0].newCasesByPublishDate, getData.previous[0].newCasesByPublishDate)}</span>
                    }
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(getData.today[0].cumCasesByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Total cases todate</h3>
                </div>

                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        getData.previous[0].cumCasesByPublishDate === 0 ?
                            <span className="text-gray-500">No change</span>
                            :
                            getData.today[0].cumCasesByPublishDate === 0 ?
                                <span className="">No data</span>
                                :
                                getData.previous[0].cumCasesByPublishDate === getData.today[0].cumCasesByPublishDate ?
                                    <span className="">No change</span> :
                                    percentageChange(getData.today[0].cumCasesByPublishDate, getData.previous[0].cumCasesByPublishDate) < 0 ?
                                        <span className="text-green-600">{percentageChange(getData.today[0].cumCasesByPublishDate, getData.previous[0].cumCasesByPublishDate)}</span>
                                        :
                                        <span className="text-red-600">{percentageChange(getData.today[0].cumCasesByPublishDate, getData.previous[0].cumCasesByPublishDate)}</span>
                    }
                </div>
            </div>


        </div>
    )
}