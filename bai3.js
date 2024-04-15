"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wednesday"] = "Wednesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays);
