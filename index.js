
function findMatching(drivers, searchTerm) {

   const searchTermLower = searchTerm.toLowerCase();

   return drivers.filter(driver => {
     const driverLower = driver.toLowerCase();
     return driverLower.includes(searchTermLower);
   });
 }

 function fuzzyMatch(drivers, searchTerm) {

   const searchTermLower = searchTerm.toLowerCase();

   return drivers.filter(driver => {
     const driverLower = driver.toLowerCase();
     return driverLower.startsWith(searchTermLower);
   });
 }
  function matchName(){

  }

function matchName(drivers, searchTerm) {
  const searchTermLower = searchTerm.toLowerCase();
    return drivers.filter(driver => {
    return driver.name === searchTerm
  });
}
