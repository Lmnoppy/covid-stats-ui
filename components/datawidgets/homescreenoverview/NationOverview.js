import { sortByDateMostRecent } from "../../utils/Date";
import Divider from "../../utils/Divider";
import { percentageChange, hasValue} from "../../utils/NumberUtils";

export default function NationOverview({ nation, data }) {

    const figures = getFigures(data);

    function getFigures(data) {
        const sortedDate = sortByDateMostRecent(data);
        const latest = sortedDate[0]
        const previous = sortedDate[1]
        return {
            latest,
            previous
        }
    }

    return (
        <div className="bg-white shadow-md max-h-96 rounded-lg p-4 sm:p-6 xl:p-8 overflow-y-scroll ">

            <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-900">{nation}</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-gray-500 text-sm">
                    last updated:  {figures.latest.date}

                </div>
            </div>

            <Divider />

            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.newCasesByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Cases</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.newCasesByPublishDate === figures.latest.newCasesByPublishDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.newCasesByPublishDate, figures.previous.newCasesByPublishDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.newCasesByPublishDate, figures.previous.newCasesByPublishDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.newCasesByPublishDate, figures.previous.newCasesByPublishDate)}</span>
                    }
                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.newDailyNsoDeathsByDeathDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Deaths</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-base font-bold">
                    {
                        figures.previous.newDailyNsoDeathsByDeathDate === figures.latest.newDailyNsoDeathsByDeathDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.newDailyNsoDeathsByDeathDate, figures.previous.newDailyNsoDeathsByDeathDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.newDailyNsoDeathsByDeathDate, figures.previous.newDailyNsoDeathsByDeathDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.newDailyNsoDeathsByDeathDate, figures.previous.newDailyNsoDeathsByDeathDate)}</span>
                    }


                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.cumCasesByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Total cases</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.cumCasesByPublishDate === figures.latest.cumCasesByPublishDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.cumCasesByPublishDate, figures.previous.cumCasesByPublishDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.cumCasesByPublishDate, figures.previous.cumCasesByPublishDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.cumCasesByPublishDate, figures.previous.cumCasesByPublishDate)}</span>
                    }

                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.cumDailyNsoDeathsByDeathDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Total deaths</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.cumDailyNsoDeathsByDeathDate === figures.latest.cumDailyNsoDeathsByDeathDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.cumDailyNsoDeathsByDeathDate, figures.previous.cumDailyNsoDeathsByDeathDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.cumDailyNsoDeathsByDeathDate, figures.previous.cumDailyNsoDeathsByDeathDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.cumDailyNsoDeathsByDeathDate, figures.previous.cumDailyNsoDeathsByDeathDate)}</span>
                    }

                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.cumPeopleVaccinatedFirstDoseByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">First dose vacine</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.cumPeopleVaccinatedFirstDoseByPublishDate === figures.latest.cumPeopleVaccinatedFirstDoseByPublishDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.cumPeopleVaccinatedFirstDoseByPublishDate, figures.previous.cumPeopleVaccinatedFirstDoseByPublishDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.cumPeopleVaccinatedFirstDoseByPublishDate, figures.previous.cumPeopleVaccinatedFirstDoseByPublishDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.cumPeopleVaccinatedFirstDoseByPublishDate, figures.previous.cumPeopleVaccinatedFirstDoseByPublishDate)}</span>
                    }

                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.cumPeopleVaccinatedSecondDoseByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Second dose vacine</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.cumPeopleVaccinatedSecondDoseByPublishDate === figures.latest.cumPeopleVaccinatedSecondDoseByPublishDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.newDailyNsoDeathsByDeathDate, figures.previous.newDailyNsoDeathsByDeathDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.cumPeopleVaccinatedSecondDoseByPublishDate, figures.previous.cumPeopleVaccinatedSecondDoseByPublishDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.cumPeopleVaccinatedSecondDoseByPublishDate, figures.previous.cumPeopleVaccinatedSecondDoseByPublishDate)}</span>
                    }

                </div>
            </div>

            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{hasValue(figures.latest.newCasesByPublishDate)}</span>
                    <h3 className="text-base font-normal text-gray-500">Booster vacine</h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    {
                        figures.previous.cumPeopleVaccinatedBoosterDoseByPublishDate === figures.latest.cumPeopleVaccinatedBoosterDoseByPublishDate ?
                            <span className="">No change</span>
                            :
                            percentageChange(figures.latest.cumPeopleVaccinatedBoosterDoseByPublishDate, figures.previous.cumPeopleVaccinatedBoosterDoseByPublishDate) < 0 ?
                                <span className="text-green-600">{percentageChange(figures.latest.cumPeopleVaccinatedBoosterDoseByPublishDate, figures.previous.cumPeopleVaccinatedBoosterDoseByPublishDate)}</span>
                                :
                                <span className="text-red-600">{percentageChange(figures.latest.cumPeopleVaccinatedBoosterDoseByPublishDate, figures.previous.cumPeopleVaccinatedBoosterDoseByPublishDate)}</span>
                    }

                </div>
            </div>

        </div>
    )
}