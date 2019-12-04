// Code your solution here
function driversWithRevenueOver(driverArr, revenue) {
    return driverArr.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(driverArr, revenue) {
    return driversWithRevenueOver(driverArr, revenue).map(driver => driver.name);
}

function exactMatch(driverArr, query) {
    return driverArr.filter(driver => {
        let hasMatch = false;
        for (const key in query) {
            hasMatch = driver[key] === query[key];
        }
        return hasMatch;
    })
}

function exactMatchToList(driverArr, query){
    return exactMatch(driverArr, query).map(driver => driver.name)
}