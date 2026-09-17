"use strict";
// Function using a loop
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
// Function using Array functions
function zipListTheFunctionalWay(list1, list2) {
    return list1.flatMap((element, index) => [element, list2[index]]);
}
// Test the functions
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
