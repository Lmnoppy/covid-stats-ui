export function percentageChange(latest, previous){
    return (latest - previous) / previous * 100;
}

export function hasValue(value){
    if(typeof value === 'undefined' || value === null || value === ''){
        return 'No Data'
    }
    return value;
}