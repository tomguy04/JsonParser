const food = require('./example_data.json');
// const foodData = JSON.parse(food);

//return an array of keys that match on a certain value
function getKeys(val) {
    for (let i = 0; i < food.items.length; i++){
        // console.log('food.items[i] '+food.items[i]);
        for (key in food.items[i]){
            // console.log('key in food.items[i] ' + food.items[i][key]);
            console.log(i+ ' ' + key + ' ' + food.items[i][key]);
            if(food.items[i][key]===val){
                // console.log(food.items[i])
            }
        }
    }
}

getKeys('Red');
