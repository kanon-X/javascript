var arr = [1, 2, 3, 4, 5, 6, 7];

// Native reduce
var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
});
console.log("Native sum:", sum);

// Custom reduce implementation
function myReduce(arr, cb, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}

// Sum using custom reduce
var sum2 = myReduce(arr, function (prev, curr) {
    return prev + curr;
}, 0);

// Max value
var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr);
}, arr[0]); // Start with first element

// Min value
var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr);
}, arr[0]); // Start with first element

console.log("Custom sum:", sum2);
console.log("Max:", max);
console.log("Min:", min);
