function closestEvent(events,date) {
    let allDatesArray = events.map(event => event.date.split("-"))

    for (let i = 0; i < allDatesArray.length; i++) {
        allDatesArray[i][0] = parseInt(allDatesArray[i][0])
        allDatesArray[i][1] = parseInt((allDatesArray[i][1]) % 12)
        allDatesArray[i][2] = parseInt(allDatesArray[i][2]) 
        if (allDatesArray[i][1] === 0) {
            allDatesArray[i][1] = 12
        }
    }
    let allDatesEpoched = allDatesArray.map(dates => new Date(dates).getTime())
    let comparedDates = allDatesEpoched.map(epoch => Math.abs(epoch-date.getTime()))
    let indexOfSmallest = comparedDates.indexOf(Math.min(...comparedDates))  

    return events[indexOfSmallest].name
}

const events = [
    { date: '2005-08-23', name: 'Hurricane Katrina' },
    { date: '2004-12-26', name: 'Indian Ocean Earthquake and Tsunami Disaster' },
    { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
    { date: '2009-01-15', name: 'Hudson River Plane Crash' },
    { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
    { date: '2001-09-11', name: 'September 11 Attacks' },
    { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
    { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
]

console.log(closestEvent(events,new Date(1990, 0, 1)))