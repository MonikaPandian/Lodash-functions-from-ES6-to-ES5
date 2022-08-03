'use strict';

//chunk() method
var sliceIntoChunks = function sliceIntoChunks(arr, chunkSize) {
    var res = [];

    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceIntoChunks(arr, 3));

// reduce() method
var users = { 'p': 2, 'q': 3, 'r': 2, 's': 2 };

var gfg = _.reduce(users, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});

console.log(gfg);

//filter() method
var users1 = [{ 'user': 'luv',
    'salary': 36000,
    'active': true }, { 'user': 'kush',
    'salary': 40000,
    'active': false }];

var filtered_array = _.filter(users, function (o) {
    return !o.active;
});

console.log(filtered_array);

//find method
var x = [-1, 29, 7, 10, 13, 15];

var result = _.find(x, function (n) {
    if (n > 10) {
        return true;
    }
}, 2);

console.log(result);

//sum method
var arr1 = [{ 'n': 10 }, { 'n': 5 }, { 'n': 3 }, { 'n': 12 }];

var sum = _.sumBy(arr1, 'n');

console.log(sum);
