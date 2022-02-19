import Divider from "../../utils/Divider";

export default function NationOverview({nation, data}){
    
    return(
          <div className="bg-white shadow-md max-h-96 rounded-lg p-4 sm:p-6 xl:p-8 overflow-y-scroll ">
            
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <h3 className="text-lg font-bold text-gray-900">{nation}</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-gray-500 text-sm">
                last updated: date
              </div>
            </div>

            <Divider />

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Cases today</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Deaths today</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Total cases</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Total deaths</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
              
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">First dose vacine</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
               
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Second dose vacine</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                
              </div>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                <h3 className="text-base font-normal text-gray-500">Booster vacine</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                
              </div>
            </div>

          </div>
    )
}