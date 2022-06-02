function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}
function fuzzyMatch(drivers, letters){
    return drivers.filter(index => index.startsWith(letters))
  }
function matchName(drivers, string){
    return drivers.filter(i => i.name === string)
}