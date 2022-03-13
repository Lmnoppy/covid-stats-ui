import { useEffect, useState } from "react";
import { sortByDateMostRecent } from "../../utils/Date";
import Divider from "../../utils/Divider";
import { percentageChange, hasValue } from "../../utils/NumberUtils";

export default function NationOverview({ nation, data }) {

    const [getData, setData] = useState(data);
    const [getlatest, setLatest] = useState();
    const [getPrevious, setPrevious] = useState();
    let elements = []

    useEffect(() => {
        const sortedDate = sortByDateMostRecent(data);
        setLatest(sortedDate[0])
        setPrevious(sortedDate[1])
        figures()
    }, [getData])

    function figures() {
        elements = []
        for (const record in getlatest) {
            elements.push(
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(getlatest[record])}</span>
                        <h3 className="text-base font-normal text-gray-500">{record}</h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        {
                            getPrevious[record] === getlatest[record] ?
                                <span className="">No change</span>
                                :
                                percentageChange(getlatest[record], getPrevious[record]) < 0 ?
                                    <span className="text-green-600">{percentageChange(getlatest[record], getPrevious[record])}</span>
                                    :
                                    <span className="text-red-600">{percentageChange(getlatest[record], getPrevious[record])}</span>
                        }
                    </div>
                </div>
            )

        }

    }

    return (
        <div className="bg-white shadow-md max-h-96 rounded-lg p-4 sm:p-6 xl:p-8 overflow-y-scroll ">
            {typeof getData != 'undefined' && typeof getlatest != 'undefined' && typeof getPrevious != 'undefined' && elements.length >= 1
                ?
                <>
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <h3 className="text-lg font-bold text-gray-900">{nation}</h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-gray-500 text-sm">
                            Date:  {getlatest.date}
                        </div>
                    </div>
                    <Divider />

                    {elements.map((object, i) => <ObjectRow obj={object} key={i} />)}
                </>
                :
                <div className='flex items-center justify-center'>
                    <div className='animate-spin rounded-3xl h-12 w-12 border-t-4 border-b-4 border-teal-600 duration-1000' role='status'>
                        <span className='visually-hidden'></span>
                    </div>

                    <span className='block'>Loading...</span>
                </div>
            }




        </div>
    )
}