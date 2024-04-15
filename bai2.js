"use strict";
let num = [1, 4, 5, 7, 9, 0];
let test = num.filter((item) => {
    return item > 2 && item < 5;
});
console.log(test);
