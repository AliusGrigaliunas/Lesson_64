"use strict";
const drinks = [{
        drink: 'Vodke',
        price: 8.5,
    }, {
        drink: 'Whiskey',
        price: 12,
    }, {
        drink: 'Liquor',
        price: 16,
    }, {
        drink: 'Beer',
        price: 100,
    }];
const sortArr = (ArrInObj) => {
    const sortPrice = ArrInObj.sort((a, b) => a.price - b.price);
    return sortPrice;
};
console.log(sortArr(drinks));
//# sourceMappingURL=TS-exercise.js.map