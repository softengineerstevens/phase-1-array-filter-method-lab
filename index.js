// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name){
return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}

console.log(findMatching(drivers, 'Steve'));


// fuzzyMatch


function fuzzyMatch(drivers, letters) {
    const matchedDrivers = [];
    const lettersLower = letters.toLowerCase();

    for (let i = 0; i < drivers.length; i++) {
        const driver = drivers[i];
        if (driver.toLowerCase().slice(0, letters.length) === lettersLower) {
            matchedDrivers.push(driver);
        }
    }

    return matchedDrivers;
}

// matchName




const detailedDrivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Sammy',
    hometown: 'New York'
  },
  {
    name: 'Sally',
    hometown: 'Cleveland'
  },
  {
    name: 'Annette',
    hometown: 'Los Angeles'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
];

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
};

  console.log(matchName(detailedDrivers, "Sally"));