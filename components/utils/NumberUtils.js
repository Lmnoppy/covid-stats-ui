export function percentageChange(latest, previous){
    return (latest - previous) / previous * 100;
}

export function hasValue(value){
    if(typeof value === 'undefined'){
        return "No Data"
    }

    return value;
}