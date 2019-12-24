const available = (arrivals, departures, availableRoom) => {
  if (!Array.isArray(arrivals)) throw new Error('arrivals is not an array')
  if (!Array.isArray(departures)) throw new Error('departures is not an array')
  if (arrivals.length !== departures.length) throw new Error('arrivals & departures are not same length')
  if (arrivals.find(i => !Number.isInteger(i) || i < 0) !== undefined) throw new Error('arrivals contains invalid date')
  if (departures.find(i => !Number.isInteger(i) || i < 0) !== undefined) throw new Error('departures contains invalid date')
  if (!Number.isInteger(availableRoom) || availableRoom < 0) throw new Error('availableRoom is not a positive integer')

  if (availableRoom >= arrivals.length) return true

  const unique = [...new Set([...arrivals, ...departures])]
  return unique.every((date) => {
    const bookOnDate = arrivals.filter((aDate, i) => date >= aDate && date <= departures[i])
    return bookOnDate.length <= availableRoom
  })
}

module.exports = {
  available
}
