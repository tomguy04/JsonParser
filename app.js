const food = require('./example_data.json');
// const foodData = JSON.parse(food);

//return an array of keys that match on a certain value
function getKeys(val) {
    // var objects = [];
    // for (var i in foodData) {
    //     if (!foodData.hasOwnProperty(i)) continue;
    //     if (typeof foodData[i] == 'object') {
    //         objects = objects.concat(getKeys(foodData[i], val));
    //     } else if (foodData[i] == val) {
    //         objects.push(i);
    //     }
    // }
    // return objects;
    console.log(val,food);
}

console.log(getKeys('Red'));
