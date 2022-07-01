let parks = ['zion', 'yellowstone', 'acadia'];


let str = '';

parks.forEach(function (park, i) {
    str += park
});

// console.log(str);

// ----------------

let newParks = parks.map(function (park) {
    return park + ' national park';
});

// console.log(newParks);


let yParks = parks.filter(function (park) {
    return park[0] === 'Y';
});

console.log(yParks);
