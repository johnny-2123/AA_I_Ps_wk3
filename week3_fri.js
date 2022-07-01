let parks = ['zion', 'yellowstone', 'acadia'];


let str = '';

parks.forEach(function (park, i) {
    str += park
});

// console.log(str);

// ----------------

let newParks = parks.map(function (park) {
    return park.toUpperCase();
});
